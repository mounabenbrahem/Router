import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';


const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns:'repeat(3,1fr)',justifyContent: 'center', }}>
            {movies.map((movie, index) => (
                <Link to={`/movie/${index}`} key={index} style={{ textDecoration: 'none', color: '#333' }}>
                    <MovieCard movie={movie} onClick={() => onMovieClick(index)} />
                </Link>
            ))}
        </div>
    );
};

export default MovieList;