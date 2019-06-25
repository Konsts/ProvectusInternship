import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
    <div className="header-container">
        <header>
            <div className="header-grid">
                <div className="instagram">
                    <img src="/images/Instagram.png" alt="instagramm logo" />
                    <span className="hashtag">#hotdogs</span>
                </div>
            </div>
            <nav>
                <ul className="menu-main">
                    <li><NavLink exact to='/'>Menu</NavLink></li>
                    <li><a href="#">Catering</a></li>
                    <li><a href="#">About us</a></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
);
export default Header;