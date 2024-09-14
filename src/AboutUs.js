import React from 'react'
import './AboutUs.css'
import AboutUsData from './AboutUsData'
import Newsletter from './Newsletter';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import ScrollUp from './Scrollup';

export default function AboutUs(){
    return(
        <div className='aboutus-section'>
           <hr/>
           <div className='about-us-container'>
            <div className='about-us-header'>
            <h4>About Us</h4>
            <h1>
            We’re Here To Bring Elegance and Creativity To Your Graphic Design Needs  
            </h1>
            </div>
            <div className='our-values'>
            <h3>
            Our Values
            </h3>
            <p>
            At the heart of everything we do is a commitment to creativity, collaboration, and authenticity. These values guide how we approach every project and interaction:
            </p> 
            </div>
            
            </div>
            <div className='about-us-card-container'>
            {AboutUsData.map((item, index) =>(
                <div key={index} className='about-us-card'>
                    <div className='about-us-icon'>
                    <i className={item.icon}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>
            ))}
            </div>
            

           

           <div className='team-section'>
            <h4 className='team-section-title'>Our Team</h4>
            <h1>Meet The Creative Force Behind Our Work</h1>
           <div className='team-section-image-container'>
           <div className='team-section-image'>
           <img src='profile-1.jpg' width="100%"/>
           <div className='team-section-image-description'>
            <h4>Ibrahim Njoroge</h4>
            <h5>Creative Lead</h5>
            <p>Discover Ibrahim Njoroge, our Creative Lead. Driven by a passion for design and a commitment to quality, Ibrahim brings your ideas to life with skill and dedication.</p>
           </div>
           </div>
           </div>
           </div>

           <Newsletter />
      <Whatsapp />
      <ScrollUp />
      <Footer />

        </div>
    )
}