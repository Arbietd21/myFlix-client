import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SearchView = () => {

    const [movieName, setMovieName] = useState('');
    const token = localStorage.getItem(`token`)

    const searchMovie = () => {

        fetch(`https://movie-flix-api-ca627b5a7961.herokuapp.com/movies/${movieName}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const searchedMovieId = data._id;
                //return console.log(data, searchedMovieId)
                location.href = `/movies/${encodeURIComponent(searchedMovieId)}`
            })
            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <>
            <Form className="d-flex ms-auto">
                <Form.Control
                    type="search"
                    placeholder="Movie Name"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setMovieName(e.target.value)}
                />
                <Button onClick={searchMovie} variant="outline-success">Search</Button>
            </Form>
        </>
    )
}