import React from 'react';
import './Contact.css';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import ScrollUp from './Scrollup';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const form = event.target;
        const formData = new FormData(form);

        const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
    
        if (!name || !email || !phone || !message) {
            alert("All fields are required.");
            return;
        }

        const emailBody = `
            Full Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `;

        // Call the Elastic Email API
        fetch('https://api.elasticemail.com/v2/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                apikey: '15041EB3CE1F62A57679713A8BD752C86FFAF4ED6AC414D1FA7B6524DFC79DD949FB55C0029C7B7CD5D249F59D4AA51C', // Replace with your Elastic Email API Key
                subject: 'Enquiry from My Website',
                from: 'gideonoro01@gmail.com', // Replace with your verified email address
                to: 'gideonoro01@gmail.com', // Replace with the recipient email
                bodyHtml: emailBody,
            }),
        })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset(); // Clear the form after successful submission
            } else {
                alert("Error sending message. Please try again.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        });
    };

    return (
        <div className='contact-section'>
            <div className='get-in-touch-container'>
                <h4 className='contact-section-title'>Contact</h4>
                <hr />
                <div className='contact-head-section'>
                    <div className='contact-section-top'>
                        <h2>Get In Touch</h2>
                        <p>Have a project in mind or need more information? Contact us, and let’s discuss the details.</p>
                    </div>
                    <div className='contact-icon-card-container'>
                        <div className='contact-icon-card'>
                            <div className='contact-icon'>
                                <i className="ri-map-pin-fill"></i>
                            </div>
                            <div>
                                <h3>Address</h3>
                                <p>Mombasa Uniform Building, Office no. 12 <br />
                                    Next to TNT Restaurant <br />
                                    MALINDI</p>
                            </div>
                        </div>
                        <hr />
                        <div className='contact-icon-card'>
                            <div className='contact-icon'>
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+254 725540293</p>
                            </div>
                        </div>
                        <hr />
                        <div className='contact-icon-card'>
                            <div className='contact-icon'>
                                <i className="ri-mail-fill"></i>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>mwacabrands@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-temp'>
                    <div className="form-container">
                        <h4 className="form-title">Send Us a Message</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="contact-name">
                                <div className="input-group">
                                    <input type="text" name="firstName" placeholder=" " required aria-label="First Name" />
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" name="lastName" placeholder=" " required aria-label="Last Name" />
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <input type="email" name="email" placeholder=" " required aria-label="Email Address" />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className="input-group">
                                <input type="tel" name="phone" placeholder=" " required aria-label="Phone Number" />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="input-group">
                                <textarea name="message" placeholder=" " aria-label="Message"></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <div className="submit">
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.508473385363!2d40.11215099999998!3d-3.2227582999999864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18158f43ad50ade9%3A0xf1086b298ba3fcbf!2sMWACA%20GRAPHIX%20AND%20CYBER!5e0!3m2!1sen!2ske!4v1726243936633!5m2!1sen!2ske" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Whatsapp />
            <ScrollUp />
            <Footer />
        </div>
    );
}
