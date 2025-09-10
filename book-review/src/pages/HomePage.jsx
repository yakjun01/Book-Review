import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/HomePage.css';

const HomePage = () => {
    // useEffect가 현재는 비어있지만, 나중에 데이터 로딩 등을 위해 남겨두었음
    useEffect(() => {
        // ex) const fetchBooks = async () => { ... }
    }, []);

    return (
        <div className="homepage">
            <Hero />
        </div>
    );
};

export default HomePage;
