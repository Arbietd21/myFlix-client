import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';
import { LoginView } from '../LoginView/login-view';
import { SignupView } from '../SignupView/signup-view';
import { Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../NavView/nav-view';


export const MainView = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
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
                console.log(data);
                const moviesFromApi = data.map((movie) => ({
                    id: movie._id,
                    title: movie.title,
                    director: movie.director.name,
                    image: movie.image
                }));
                setMovies(moviesFromApi);
            })
            .catch((error) => {
                console.error(error);
                // Handle the error, e.g., show a message to the user
            });
    }, [token]);



    return (
        <BrowserRouter>
            <NavBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                }}
            />
            <Row>
                <Routes>
                    <Route
                        //if there is no authenticated user, takes you to signup page
                        path="/signup"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        //same logic as above but this takes user to login page
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <LoginView onLoggedIn={(user) => setUser(user)} />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        //if you click on a specific movie it takes you to movie view
                        path="/movies/:movieId"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView movies={movies} />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        //if there is no user, takes you to login
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" reeplace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <>
                                        {movies.map((movie) => (
                                            //if there is an authenticated user, it takes the movies card and maps each movie
                                            <Col className="mb-4" key={movie.id} md={3}>
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};