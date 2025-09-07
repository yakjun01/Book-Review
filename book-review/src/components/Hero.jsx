import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>A Quiet Corner for Book Lovers</h1>
                <p>책과 함께하는, 나만의 조용한 코너</p>
            </div>
            <div className="scroll-down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 5V19M12 19L18 13M12 19L6 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
