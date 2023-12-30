import { useState } from 'react';
import { MovieCard } from '../MovieCard/movie-card'

export const MainView = () => {
    const [movies, setMovies] = useState([
        //movies array
        { id: 1, title: 'Creed', image: "https://www.filmaffinity.com/en/film943315.html" },
        { id: 2, title: 'Fast and Furious', image: "https://www.filmaffinity.com/en/film484467.html" },
        { id: 3, title: 'Thor Ragnarok', image: "https://www.filmaffinity.com/en/film546383.html" }
    ]);

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    };

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
};