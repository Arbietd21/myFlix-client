import React from 'react';
import { Col, Card } from 'react-boostrap';

export const FavMovies = () => {
    const storedUser = localStorage.getItem('user');
    const movies = json(storedUser.favorites);


    console.log(storedUser);
    console.log(movies)
}


return

<>

    < Col key={movies.id} >
        <Card.Img src={movies.image} />
        <Card.Body>
            <Card.Title>{movies.title}</Card.Title>
        </Card.Body>
    </Col>

</>