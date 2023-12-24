import { useState } from 'react';

export const MainView = () => {
    const [ movies, setMovies ] = useState ([
        {id: 1, title: 'Creed'},
        {id: 2, title: 'Fast and Furious'},
        {id: 3, title: 'Thor Ragnarok'}
    ]);

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    };
    
    return (
        <div>
            {movies.map((movie) => {
                return <div>{movie.title}</div>
            })}
        </div>
    );
};