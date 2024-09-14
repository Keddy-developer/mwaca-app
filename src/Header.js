import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css'; // Make sure to import your CSS file

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef(null);
    const location = useLocation(); // Get the current location
    const navigate = useNavigate(); // Get the navigate function

    const toggleMenu = () => {
        if (windowWidth < 800) {
            if (isMenuOpen) {
                setIsAnimating(true);
                setTimeout(() => {
                    setIsMenuOpen(false);
                    setIsAnimating(false);
                }, 300);
            } else {
                setIsMenuOpen(true);
            }
        }
    };

    const closeMenu = () => {
        if (windowWidth < 800) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handleClickOutside = (event) => {
        if (windowWidth < 800 && menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 801) {
                setIsMenuOpen(false);
                document.removeEventListener("click", handleClickOutside);
            }
        };

        if (windowWidth < 800 && isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen, windowWidth]);

    const menuContentClass =
        windowWidth >= 801
            ? "menu-container desktop"
            : isMenuOpen
            ? "menu-container show"
            : isAnimating
            ? "menu-container hide"
            : "menu-container";

    // Determine active link based on the current path
    const getLinkClass = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    const handleLogoClick = () => {
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            <div className='header-container'>
                <div className='logo' onClick={handleLogoClick}>
                    <img src='logo192.png' width="80px" height="80px" alt="logo" />
                    <img src='logo.png' width="170px" alt="logo text" />
                </div>

                <div className='nav-menu' ref={menuRef}>
                    {/* For window width < 800, show the hamburger icon */}
                    {windowWidth < 800 ? (
                        <>
                            <button onClick={toggleMenu} className="menu-toggle-btn">
                                <i className="ri-menu-line"></i>
                            </button>
                            <div className={menuContentClass}>
                                <div className='close-btn-container'>
                                    <button onClick={toggleMenu} className="close-menu-btn">
                                        <i className="ri-close-fill"></i>
                                    </button>
                                </div>
                                <ul>
                                    <li><a href="/" className={getLinkClass('/')}>Home</a></li>
                                    <li><a href="/about" className={getLinkClass('/about')}>About</a></li>
                                    <li><a href="/blog" className={getLinkClass('/blog')}>Blog</a></li>
                                    <li><a href="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</a></li>
                                    <li><a href="/contact" className={getLinkClass('/contact')}>Contact</a></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        // For window width >= 801, show the menu items directly
                        <div className="desktop-menu">
                            <ul>
                                <li><a href="/" className={getLinkClass('/')}>Home</a></li>
                                <li><a href="/about" className={getLinkClass('/about')}>About</a></li>
                                <li><a href="/blog" className={getLinkClass('/blog')}>Blog</a></li>
                                <li><a href="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</a></li>
                                <li><a href="/contact" className={getLinkClass('/contact')}>Contact</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
