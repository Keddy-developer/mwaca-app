import React from 'react'
import PortfolioPageData from './PortfolioPageData'
import './Portfolio.css'
import Newsletter from './Newsletter';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import ScrollUp from './Scrollup';

export default function PortfolioPage(){
    return (
        <div className='portfolio-page-container'>
           <hr/>
           <h4 className='portfolio-title'>Portfolio</h4>
           <div className='portfolio-page-card-container'>
            {PortfolioPageData.map((item, index) => (
                <div key={index} className='portfolio-page-card'>
                 <img src={item.image} width="100%" />
                
                <div className='portfolio-page-data'>
                <h4>{item.title}</h4> ⦿ <h4>{item.category}</h4>
                </div>
                 
               
                 
                </div>
            ))}
           </div>
           <Newsletter />
            <Whatsapp />
            <ScrollUp />
            <Footer />
        </div>
    )
}