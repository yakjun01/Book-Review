import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">A Quiet Corner</Link>
            </div>
            <nav className="header__nav-menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    홈
                </NavLink>
                <NavLink to="/bestsellers" className={({ isActive }) => (isActive ? 'active' : '')}>
                    베스트셀러
                </NavLink>
                <NavLink to="/genres" className={({ isActive }) => (isActive ? 'active' : '')}>
                    장르
                </NavLink>
                <NavLink to="/new-arrivals" className={({ isActive }) => (isActive ? 'active' : '')}>
                    신간
                </NavLink>
                <NavLink to="/review" className={({ isActive }) => (isActive ? 'active' : '')}>
                    리뷰
                </NavLink>
            </nav>
            <div className="header__search">
                <button className="search-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="#3C3C3C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21 21L16.65 16.65"
                            stroke="#3C3C3C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
