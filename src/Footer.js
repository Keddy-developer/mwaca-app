import React from "react";

export default function Footer(){
    return (
        <div className="footer-section">
            <div className="footer-container">
            <div className='logo-2'>
                    <img src='footer-logo.png' width="80px" height="80px" alt="logo" />
                    <img src='footer-logo-2.png' width="170px" alt="logo text" />
            </div>
            <div>
            <div className="footer-top-content">
                <div className="footer-content-data">
                <h5>Want to kick start your project?</h5>
                <p>Use This Email</p>
                <h5>gideonoro01@gmail.com</h5>
                </div>
                <div className="footer-content-data">
                    <h5>Want to say hi?</h5>
                    <p>General Inquiries</p>
                    <h5>+254 725540293</h5>
                </div>
                <div className="footer-content-data">
                <h5>Find us on social media</h5>
                <p>Social media</p>
                <div class="footer__social">
                  <a href="https://www.facebook.com/MWACAgraphixmalindi" target="_blank">
                     <i class="ri-facebook-circle-fill"></i>
                  </a>

                  <a href="https://www.instagram.com/mwaca_graphix?igsh=YzljYTk1ODg3Zg==" target="_blank">
                     <i class="ri-instagram-fill"></i>
                  </a>

                  <a href=" https://wa.me/+254725540293" target="_blank">
                     <i class="ri-whatsapp-fill"></i>
                  </a>


               </div>
                </div>
            </div>
            <hr/>
            <div className="footer-content-mid">
               <div className="footer-content-data">
                <h5>Quick links</h5>
               
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="footer-content-data">
                <h5>Contact Us</h5>
                <p> +254 725540293</p>
                </div>
                <div className="footer-content-data">
                    <h5>Our Location</h5>
                    <p> Mombasa Uniform Building </p>
                    <p> Office no. 12 </p>
                    <p>Next to TNT Restaurant </p>
                    <p> MALINDI</p>
                </div>
            </div>
           
            </div>
            </div>
            <hr/>
            
            <div className="footer-bottom">
                <p><small>Copyright ©2024 By Mwaca Graphix . All Rights Reserved.</small></p>
            </div>
        </div>
    )
}