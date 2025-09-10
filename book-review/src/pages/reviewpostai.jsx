// ReviewPost.jsx (Fixed)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import SectionTitle from '../components/SectionTitle';
// import '../styles/ReviewPost.css'; // 경로 오류 문제를 해결하기 위해 CSS를 컴포넌트 내부에 포함

const genresData = ['소설', '에세이', '인문', '자기계발', '예술', 'IT/공학'];

// CSS를 컴포넌트 내부에 직접 정의하여 경로 문제를 해결
const ReviewPostStyles = () => (
    <style>{`
    .review-post-page {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        background-color: #f9f9f9;
        min-height: 100vh;
    }

    .review-post-container {
        background-color: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        width: 100%;
        max-width: 700px;
    }

    .review-form .form-group {
        margin-bottom: 25px;
    }

    .review-form label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 1rem;
        color: #333;
    }

    .review-form input[type="text"],
    .review-form select,
    .review-form textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.2s;
        box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
    }

    .review-form input[type="text"]:focus,
    .review-form select:focus,
    .review-form textarea:focus {
        outline: none;
        border-color: #5a93e8;
        box-shadow: 0 0 0 2px rgba(90, 147, 232, 0.2);
    }

    .review-form textarea {
        min-height: 200px;
        resize: vertical;
    }

    .form-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 30px;
    }

    .form-buttons button {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .submit-button {
        background-color: #333;
        color: white;
    }

    .submit-button:hover {
        background-color: #555;
    }

    .cancel-button {
        background-color: #f0f0f0;
        color: #333;
        border: 1px solid #ddd;
    }

    .cancel-button:hover {
        background-color: #e0e0e0;
    }
  `}</style>
);

export default function ReviewPost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [book, setBook] = useState('');
    const [genre, setGenre] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!book || !title || !content) {
            alert('책 제목, 글 제목, 리뷰 내용은 필수 항목입니다.');
            return;
        }

        const reviewData = {
            book_title: book,
            genre: genre,
            title: title,
            content: content,
            author: 'testuser',
        };

        try {
            await axios.post('http://localhost:3000/api/reviews', reviewData);
            alert('리뷰가 성공적으로 등록되었습니다.');
            navigate('/review');
        } catch (error) {
            console.error('리뷰 등록 중 오류 발생:', error);
            alert('리뷰 등록에 실패했습니다. 서버 상태를 확인해주세요.');
        }
    };

    return (
        <>
            <ReviewPostStyles />
            <div className="review-post-page">
                <div className="review-post-container">
                    {/* <SectionTitle title="리뷰 작성" /> */}
                    <form className="review-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="book-title">책 제목</label>
                            <input
                                type="text"
                                id="book-title"
                                value={book}
                                onChange={(e) => setBook(e.target.value)}
                                placeholder="책 제목을 입력해주세요"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre-select">장르 선택</label>
                            <select id="genre-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
                                <option value="">장르를 선택하세요</option>
                                {genresData.map((g, index) => (
                                    <option key={index} value={g}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">글 제목</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="글 제목을 입력해주세요"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">리뷰 내용</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="책에 대한 당신의 생각을 자유롭게 적어주세요"
                            />
                        </div>

                        <div className="form-buttons">
                            <button type="submit" className="submit-button">
                                리뷰 등록
                            </button>
                            <button type="button" className="cancel-button" onClick={() => navigate('/review')}>
                                취소
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
