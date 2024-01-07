import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/movie-card'
import { MovieView } from '../MovieView/movie-view'
import { LoginView } from '../LoginView/login-view'

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://movie-flix-api-ca627b5a7961.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data;
                setMovies(moviesFromApi);
                console.log(movies);
            });
    }, []);

    if (!user) {
        return <LoginView />;
    }

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    };

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                        console.log(newSelectedMovie)
                    }}
                />
            ))}
        </div>
    );
};