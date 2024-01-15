import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token")

    const addToFavorites = () => {

        fetch(`https://movie-flix-api-ca627b5a7961.herokuapp.com/users/${user.username}/movies/${movieId}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        })
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
                onClick={addToFavorites}
            >Favorite</Button>
        </Col>
    )
}