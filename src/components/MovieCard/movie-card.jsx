import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div onClick={() => {
            onMovieClick(movie);
        }}>
            {movie.Title}
        </div>
    );
};

MovieCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    onBookClick: PropTypes.func.isRequired
};