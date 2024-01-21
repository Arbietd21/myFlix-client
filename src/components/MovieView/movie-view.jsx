import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import './movie-view.scss';
import { useState } from 'react';

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const token = localStorage.getItem("token")



    const addToFavorites = () => {

        fetch(`https://movie-flix-api-ca627b5a7961.herokuapp.com/users/${user.username}/movies/${movieId}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(
                alert("Added to favorites!")
            )
    };

    const updateUser = () => {

        fetch(`https://movie-flix-api-ca627b5a7961.herokuapp.com/users/${user.username}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((updatedUser) => {
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser))
            })
            .catch((error) => {
                console.error('Error updating user', error)
            });
    }

    return (
        <Col md={8}>
            <div>
                <img className="w-100" src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>
            <Link to={`/`}>
                <Button className="back-button">Back</Button >
            </Link>
            <Button
                onClick={() => { addToFavorites(), updateUser() }}

            >Favorite</Button>
        </Col>
    );
};
