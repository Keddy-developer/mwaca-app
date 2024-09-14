// Modal.js
import React from 'react';
import './Modal.css'; // Ensure you create this CSS file for styling

export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={onClose}>
                            <i className="ri-close-fill"></i>
                        </span>
                <h4>Send Us a Message</h4>
                <form onSubmit={handleSubmit}> 
                    <div className="input-group">
                        <input type="text" nmae="firstName" placeholder=" " required aria-label="First Name" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="lastName" placeholder=" " required aria-label="Last Name" />
                        <label htmlFor="lastName">Last Name</label>
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
                        <button className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
