import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import BestSellers from './pages/BestSellers.jsx';
import Genres from './pages/Genres.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import ReviewList from './pages/ReviewList.jsx';
import ReviewPost from './pages/ReviewPost.jsx';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bestsellers" element={<BestSellers />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/review" element={<ReviewList />} />
                <Route path="/review/post" element={<ReviewPost />} />
            </Routes>
        </>
    );
}

export default App;
