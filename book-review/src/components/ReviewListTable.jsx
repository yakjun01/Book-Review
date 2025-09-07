import React from 'react';
import '../styles/ReviewList.css';

const ReviewListTable = ({ reviews, onReviewClick }) => {
    // 날짜 형식을 YYYY. MM. DD. 로 변경하는 함수
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\.$/, '');
    };

    return (
        <div className="review-table-wrapper">
            <table className="review-table">
                <thead>
                    <tr>
                        <th className="column-number">번호</th>
                        <th className="column-title">제목</th>
                        <th className="column-book-title">책 제목</th>
                        <th className="column-genre">장르</th>
                        <th className="column-writer">작성자</th>
                        <th className="column-date">작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id}>
                            <td>{review.id}</td>
                            <td className="review-title">
                                <span className="review-link" onClick={() => onReviewClick(review.id)}>
                                    {review.title}
                                </span>
                            </td>
                            <td>{review.book_title}</td>
                            <td>{review.genre}</td>
                            <td>{review.author}</td>
                            <td>{formatDate(review.created_at)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewListTable;
