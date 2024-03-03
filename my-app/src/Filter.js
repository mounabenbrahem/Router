// src/Filter.js/ A functional component that represents the filter section of the application and It includes input fields for title and rating, and it triggers the provided callback functions (onTitleChange and onRatingChange) when the input values change.

import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
    return (
        <div style={{ margin: '20px' }}>
            <label htmlFor="titleFilter" style={{ marginRight: '10px', fontSize: '18px' }}>
                Title:
            </label>
            <input type="text" id="titleFilter" onChange={(e) => onTitleChange(e.target.value)} />

            <label htmlFor="ratingFilter" style={{ marginLeft: '20px', fontSize: '18px' }}>
                Rating:
            </label>
            <input type="number" id="ratingFilter" onChange={(e) => onRatingChange(e.target.value)} />
        </div>
    );
};

export default Filter;