import React from 'react';
import BookCard from '../components/BookCard';
import SectionTitle from '../components/SectionTitle';

const newArrivalsData = [
    { id: 11, title: '안녕이라 그랬어', author: '김애란', image: '/images/book11.jpg' },
    { id: 12, title: '파과', author: '구병모', image: '/images/book12.jpg' },
    { id: 13, title: '소년이 온다', author: '한강', image: '/images/book13.jpg' },
    { id: 14, title: '급류', author: '정대견', image: '/images/book14.jpg' },
    { id: 15, title: '불안', author: '알랭 드 보통', image: '/images/book15.jpg' },
    { id: 16, title: '일의 감각', author: '조수용', image: '/images/book16.jpg' },
];

export default function NewArrivals() {
    return (
        <div>
            <section className="new-arrivals">
                <SectionTitle title="New Arrivals" subtitle="새로 도착한 책들을 만나보세요" />
                <div className="new-arrivals__grid">
                    {newArrivalsData.map((book) => (
                        <BookCard key={book.id} title={book.title} author={book.author} image={book.image} />
                    ))}
                </div>
            </section>
        </div>
    );
}
