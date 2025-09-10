// src/components/ReviewDetail.jsx

import React from 'react';
import '../styles/ReviewDetail.css';

export default function ReviewDetail({ isOpen, onClose, review }) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {' '}
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                {review ? (
                    <>
                        <h2 className="modal-title">{review.title}</h2>
                        <div className="modal-meta">
                            <span>작성자: {review.writer}</span>
                            <span>작성일: {review.date}</span>
                        </div>
                        <div className="modal-info">
                            <p>
                                <strong>책 제목:</strong> {review.book_title}
                            </p>
                            <p>
                                <strong>장르:</strong> {review.genre}
                            </p>
                        </div>
                        <div className="modal-body-content">
                            <p>{review.content}</p>
                        </div>
                    </>
                ) : (
                    <p>리뷰 내용을 불러올 수 없습니다.</p>
                )}
            </div>
        </div>
    );
}
