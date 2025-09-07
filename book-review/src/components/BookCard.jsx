// src/components/BookCard.jsx

import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ image, title, author }) => {
    return (
        <a href="#" className="book-card">
            <div className="book-card-image-container">
                {image ? (
                    <img src={image} alt={`${title} cover`} />
                ) : (
                    // 이미지가 없을 때 회색 배경을 보여주는 placeholder div
                    <div className="no-image-placeholder"></div>
                )}
            </div>
            <h3 className="book-card-title">{title}</h3>
            <p className="book-card-author">{author}</p>
        </a>
    );
};

export default BookCard;
