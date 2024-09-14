import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="hero-container">
            <h3 className="top-title">Bring Your Thoughts to Reality</h3>
            <p>Your One-Stop Solution for All Graphic Design and Printing Needs</p>
            <button onClick={handleOpenModal}>
                Get started today
            </button>
            <div className="hero-icon">
                <div className="hero-dgtl-printing">
                    <h3>Digital Printing</h3>
                    <p>Vibrant, high-quality digital prints</p>
                </div>
                <img className="hero-image" src="hero-icon.png" alt="Hero Icon" />
                <div className="hero-graphic-design">
                    <h3>Graphics Design</h3>
                    <p>Transforming ideas into visually stunning designs</p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}
