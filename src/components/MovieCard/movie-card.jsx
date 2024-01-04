import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div onClick={() => {
            onMovieClick(movie);
        }}>
            {movie.title}
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onBookClick: PropTypes.func.isRequired
};