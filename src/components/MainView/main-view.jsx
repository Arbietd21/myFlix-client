import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/movie-card'
import { MovieView } from '../MovieView/movie-view'
import { LoginView } from '../LoginView/login-view'

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://movie-flix-api-ca627b5a7961.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movie) => {
                    return {
                        id: movie._id,
                        title: movie.Title
                    }
                });
                setMovies(moviesFromApi)
            });
    }, [token]);

    if (!user) {
        return (
            <LoginView
                onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }}
            />
        )
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
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                        console.log(newSelectedMovie)
                    }}
                />
            ))}
            <button onClick={() => { setUser(null); setToken(null) }} >Logout</button>
        </div>
    );
};