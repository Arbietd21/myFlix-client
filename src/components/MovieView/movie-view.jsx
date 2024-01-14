import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import './movie-view.scss';

export const MovieView = ({ movie }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);

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
        </Col>
    )
}