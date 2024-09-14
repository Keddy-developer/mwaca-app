import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import BlogPage from './BlogPage';
import PortfolioPage from './PortfolioPage';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop /> {/* Ensure ScrollToTop is at the top */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<Contact />} />
                {/* Redirect all other routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
