import { useState, useEffect } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { MovieCard } from '../MovieCard/movie-card';

export const FavMovies = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const favoriteMovies = storedUser.favorites;
    const token = localStorage.getItem('token');
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        if (!token) {
            return;
        }
        fetch("https://movie-flix-api-ca627b5a7961.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const filteredMovies = data.filter((movie) => favoriteMovies.includes(movie._id));
                const faveMovies = filteredMovies.map((movie) => ({
                    id: movie._id,
                    title: movie.title,
                    director: movie.director.name,
                    image: movie.image
                }));

                setMovies(faveMovies);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token, storedUser]);

    return (
        <>
            {movies.map((movie) => (
                <Col md={4} key={movie._id}>
                    <MovieCard movie={movie} />
                </Col>
            ))}
        </>
    );

}
