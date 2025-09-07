import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4 className="footer-logo">A Quiet Corner</h4>
                    <p className="footer-text">
                        책을 사랑하는 당신을 위한 조용한 코너. <br />
                        깊이 있는 지식과 감성을 발견하세요.
                    </p>
                </div>
                <div className="footer-column">
                    <h4>메뉴</h4>
                    <ul>
                        <li>
                            <a href="/">홈</a>
                        </li>
                        <li>
                            <a href="/bestsellers">베스트셀러</a>
                        </li>
                        <li>
                            <a href="/genres">장르</a>
                        </li>
                        <li>
                            <a href="/new-arrivals">신간</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>정보</h4>
                    <ul>
                        <li>
                            <a href="/about">회사 소개</a>
                        </li>
                        <li>
                            <a href="/contact">문의</a>
                        </li>
                        <li>
                            <a href="/privacy">개인정보처리방침</a>
                        </li>
                        <li>
                            <a href="/terms">이용약관</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 A Quiet Corner. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
