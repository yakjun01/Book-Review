import React from 'react';
import BookCard from '../components/BookCard';
import SectionTitle from '../components/SectionTitle';

const bestSellersData = [
    { id: 1, title: '채식주의자', author: '한강', image: '/images/book1.png' },
    { id: 2, title: '백의 그림자', author: '황정은', image: '/images/book2.jpg' },
    { id: 3, title: '싯다르타', author: '헤르만 헤세', image: '/images/book3.jpg' },
    { id: 4, title: '우리의 낙원에서 만나자', author: '하테완', image: '/images/book4.jpg' },
];

export default function BestSellers() {
    return (
        <div>
            <section className="bestsellers">
                <SectionTitle title="Curated Selection" subtitle="이 계절에 어울리는 추천 도서" />
                <div className="bestsellers__grid">
                    {bestSellersData.map((book) => (
                        <BookCard key={book.id} title={book.title} author={book.author} image={book.image} />
                    ))}
                </div>
            </section>
        </div>
    );
}
