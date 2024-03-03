// src/MovieCard.js/A functional component that represents an individual movie card and It takes a movie object as a prop and displays the movie's poster, title, description, and rating.
// MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { id, title, description, posterURL, rating, trailerLink } = movie;

    return (
        <div
            style={{
                border: '2px solid #333',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px',
                width: '350px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <img
                src={posterURL}
                alt={title}
                style={{ width: '100%',  objectFit: 'cover', marginBottom: '10px', justifyContent:'center' }}
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0', fontWeight: 'bold', color: '#007bff' }}>{title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>{description}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#28a745' }}>Rating: {rating}</p>

            {/* "Watch Trailer" link */}
            <Link
                to={`/movie/${id}?trailerUrl=${encodeURIComponent(trailerLink)}`}
                style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#dc3545',
                    textDecoration: 'none',
                    textAlign: 'center',
                    padding: '8px',
                    backgroundColor: '#fff',
                    border: '1px solid #dc3545',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Watch Trailer
            </Link>
        </div>
    );
};

export default MovieCard;