import React, { useState } from 'react';
import { marked } from 'marked';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import ScrollUp from './Scrollup';
import BlogPageData from './BlogPageData';
import './Blog.css';

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleReadMore = (post) => {
        setSelectedPost(post);
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('blog-modal')) {
            handleClose();
        }
    };

    return (
        <div className='blogpage-section'>
            <hr />
            <h3>Blog</h3>
            <div className='blogpage-card-container'>
                {BlogPageData.map((item, index) => (
                    <div className='blogpage-card' key={index}>
                        <img src={item.image} width="100%" height="100%" alt={item.title} />
                        <div className="blog-page-data">
                            <h5>{item.date}</h5>
                            <h4>{item.title}</h4>
                            <button onClick={() => handleReadMore(item)}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPost && (
                <div className="blog-modal" onClick={handleOutsideClick}>
                    <div className="blog-modal-content">
                        <div className='blog-close-btn'>
                            <span className="blog-modal-close" onClick={handleClose}>&times;</span>
                        </div>
                        <img src={selectedPost.image} width="100%" height="auto" alt={selectedPost.title} />
                        <h4>{selectedPost.title}</h4>
                        <div 
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: marked(selectedPost.post) }}
                        />
                    </div>
                </div>
            )}

            <Newsletter />
            <Whatsapp />
            <ScrollUp />
            <Footer />
        </div>
    );
}
