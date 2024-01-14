import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';
import { LoginView } from '../LoginView/login-view';
import { SignupView } from '../SignupView/signup-view';
import { Row, Col, Button } from 'react-bootstrap';

export const MainView = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);


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
                        title: movie.title,
                        director: movie.director.name,
                        image: movie.image
                    }
                });
                setMovies(moviesFromApi)
            });
    }, [token]);


    return (
        <Row>
            {!user ? (
                <>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                    or
                    <SignupView />
                </>
            ) : selectedMovie ? (
                <Col md={8} style={{ border: '1px solid black' }}>
                    <MovieView
                        movie={selectedMovie}
                        onBackClick={() => setSelectedMovie(null)}
                    />
                </Col>
            ) : movies.length === 0 ? (
                <div>The list is empty!</div>
            ) : (
                <>
                    {movies.map((movie) => (
                        <Col className="mb-5" key={movie.id} md={3}>
                            <MovieCard
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>
                    ))}

                    <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }} variant="primary">Logout</Button>
                </>
            )
            }
        </Row>
    );
};