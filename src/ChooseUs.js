import React, {useState} from "react";
import ChooseUsData from "./ChooseUsData";
import Modal from "./Modal"; 

export default function ChooseUS(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
   
   
    return (
        <div className="choose-us-container"> 
            <h4 className="choose-us-title">Why Choose Us</h4>
            <h3>Unlock Instant Growth for Your Business</h3>
            <div className="choose-us-card-container">
            {ChooseUsData.map((item, index) => {
                return <div className="choose-us-card" key={index}>
                <dic className='card-icon'>
                <i className={item.icon}></i> 
                </dic>
                <div className="card-info">
                <h4>{item.title}</h4>  
                <p>{item.text}</p>
                </div>
                 
                    </div>
            })}
            </div>
            <div className="choose-us-btn">
            <button onClick={handleOpenModal}>
                Get started today
            </button>
            </div>
            <div className="choose-us-img">
            <img src="choose-us.png"></img>
            <div className="choose-highlight">
                <div className="choose-image-header">
                    <h1>71%</h1>
                    <div className="up-arrow"><i className="ri-rocket-2-line"></i></div>
                    
                </div>
                <h4><strong>Extra growth</strong></h4>
                 <p>for your business!</p>
            </div>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}