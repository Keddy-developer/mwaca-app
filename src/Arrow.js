import React from 'react';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-arrow-next" onClick={onClick}>
            <i className="ri-arrow-right-s-line"></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
            <i className="ri-arrow-left-s-line"></i>
        </div>
    );
};

export { NextArrow, PrevArrow };
