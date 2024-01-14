import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';
import { LoginView } from '../LoginView/login-view';
import { SignupView } from '../SignupView/signup-view';
import { Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


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
        <BrowserRouter>
            <Row>
                <Routes>
                    <Route
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

                    <Route />

                    <Route />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};