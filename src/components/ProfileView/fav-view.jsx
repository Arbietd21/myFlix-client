import { useState, useEffect } from 'react';
import { Col, Card, Row } from 'react-bootstrap';

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
                setMovies(filteredMovies);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token, storedUser]);

    return (
        <>
            {movies.map((movie) => (
                <Col md={4} key={movie._id}>
                    <Card>
                        <Card.Img src={movie.image} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    );

}
