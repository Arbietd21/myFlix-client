import { useState } from 'react';
import { MovieCard } from '../MovieCard/movie-card'
import { MovieView } from '../MovieView/movie-view'

export const MainView = () => {
    const [movies, setMovies] = useState([
        //movies array
        { id: 1, title: 'Creed', image: "https://www.filmaffinity.com/en/film943315.html", director: "Ryan Coogler" },
        { id: 2, title: 'Fast and Furious', image: "https://www.filmaffinity.com/en/film484467.html", director: "" },
        { id: 3, title: 'Thor Ragnarok', image: "https://www.filmaffinity.com/en/film546383.html", director: "Taika W" }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
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
                    }}
                />
            ))}
        </div>
    );
};