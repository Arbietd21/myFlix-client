import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap'

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card onClick={() => {
            onMovieClick(movie);
        }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Director: {movie.director}</Card.Text>
            </Card.Body>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};