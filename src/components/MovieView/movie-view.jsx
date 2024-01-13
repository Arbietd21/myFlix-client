import './movie-view.scss'
import Col from 'react-bootstrap/Col'

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Col md={8}>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>
            <div>
                <button onClick={onBackClick}>Back</button>
            </div>
        </Col>
    )
}