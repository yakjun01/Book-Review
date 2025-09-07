import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from '../components/SectionTitle';
import ReviewListTable from '../components/ReviewListTable';
import '../styles/ReviewList.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReviewDetail from '../components/ReviewDetail';

export default function ReviewList() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectReview] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [sortOrder, setSortOrder] = useState('latest');

    const fetchReviews = async (search = '', sort = 'latest') => {
        try {
            const response = await axios.get('http://localhost:3000/api/reviews', {
                params: { search, sort },
            });
            setReviews(response.data);
        } catch (error) {
            console.error('리뷰 데이터를 불러오는 데 실패했습니다.', error);
            alert('리뷰 데이터를 불러오는 데 실패했습니다.');
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchReviews(searchTerm, sortOrder);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, sortOrder]);

    const handleWriteBtnClick = () => {
        navigate('/review/post');
    };

    const handleReviewClick = (reviewId) => {
        const review = reviews.find((r) => r.id === reviewId);
        setSelectReview(review);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectReview(null);
    };

    return (
        <div className="review-list-page">
            <SectionTitle title="Review" subtitle="책에 대한 깊이 있는 통찰을 나눠보세요" />
            <div className="review-list-container">
                <div className="review-actions">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="제목, 책 제목, 내용, 작성자, 장르로 검색"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="action-buttons">
                        <button className="write-button" onClick={handleWriteBtnClick}>
                            리뷰 작성
                        </button>
                        <select
                            className="sort-by"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="latest">최신순</option>
                            <option value="oldest">오래된순</option>
                        </select>
                    </div>
                </div>
                <ReviewListTable reviews={reviews} onReviewClick={handleReviewClick} />
            </div>

            <ReviewDetail isOpen={isModalOpen} onClose={handleCloseModal} review={selectedReview} />
        </div>
    );
}
