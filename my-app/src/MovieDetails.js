// MovieDetails.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const MovieDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const trailerLink = queryParams.get('trailerUrl');

    useEffect(() => {
        // You may want to log trailerLink here to verify it's correctly retrieved
        console.log('Trailer Link:', trailerLink);
    }, [trailerLink]);

    if (!trailerLink) {
        return <p>Trailer Link not found.</p>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Embed the trailer using an iframe */}
            <iframe
                title="Trailer"
                width="560"
                height="315"
                src={trailerLink}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            {/* "Go Back Home" button */}
            <Link
                to="/"
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                }}
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default MovieDetails;
