import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const genresData = [
    { id: 1, name: '소설', image: '/images/genre-novel.jpg' },
    { id: 2, name: '에세이', image: '/images/genre-essay.jpg' },
    { id: 3, name: '인문', image: '/images/genre-humanities.jpg' },
    { id: 4, name: '자기계발', image: '/images/genre-selfhelp.jpg' },
    { id: 5, name: '예술', image: '/images/genre-art.jpg' },
    { id: 6, name: 'IT/공학', image: '/images/gerne-it.jpg' },
];

export default function Genres() {
    return (
        <div>
            <section className="genres">
                <SectionTitle title="Browse by Genre" subtitle="관심있는 장르를 탐색해 보세요" />
                <div className="genres__grid">
                    {genresData.map((genre) => (
                        <Link to={`/review?search=${genre.name}`} key={genre.id} className="genre-item">
                            <div className="genre-item__image" style={{ backgroundImage: `url(${genre.image})` }}></div>
                            <p>{genre.name}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
