// ReviewPost.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import '../styles/ReviewPost.css';

const genresData = ['소설', '에세이', '인문', '자기계발', '예술', 'IT/공학'];

export default function ReviewPost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState(''); // Add author state
    const [genre, setGenre] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/reviews', {
                book_title: book,
                genre,
                title,
                author: author, // Send author state
                content,
            });
            navigate('/review');
        } catch (error) {
            alert('리뷰 등록에 실패했습니다.');
            console.error(error);
        }
    };

    return (
        <div className="review-post-page">
            <div className="review-post-container">
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

                    {/* Add Author Input Field */}
                    <div className="form-group">
                        <label htmlFor="author">작성자</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="작성자 이름을 입력해주세요"
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
    );
}