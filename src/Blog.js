import React from "react";
import BlogData from "./BlogData";

export default function Achievements() {
    return (
        <div className="achievement-container">
            <h4>Blog</h4>
            <h3 className="achievement-title">Latest Posts</h3>
            <div className="blog-card-container">
                {BlogData.map((item, index) => (
                    <div className="blog-card" key={index}>
                        <img
                            src={item.image}
                            width="100%"
                            height="100%"
                            alt={item.title} // Provide a meaningful description
                        />
                        <div className="blog-card-data">
                            <h5>{item.date}</h5>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
