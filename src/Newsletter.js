import React, { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = (event) => {
        event.preventDefault();

        if (!email) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        // API request to add email to the list on Elastic Email
        fetch('https://api.elasticemail.com/v2/contact/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                apikey: '15041EB3CE1F62A57679713A8BD752C86FFAF4ED6AC414D1FA7B6524DFC79DD949FB55C0029C7B7CD5D249F59D4AA51C', // Replace with your Elastic Email API Key
                email: email,
                publicaccountid: '31831af5-3f44-465e-b72d-f1a995767257', // Replace with your Elastic Email Public Account ID
                listname: 'NewsletterSubscribers', // Replace with the name of the list you've created in Elastic Email
                status: 'Active'
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                setMessage('Thank you for subscribing to Mwaca Graphix Community!');
            } else {
                setMessage('Subscription failed. Please try again.');
            }
            setIsSubmitting(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
            setIsSubmitting(false);
        });
    };

    return (
        <div className="newsletter-container">
            <div className="newsletter-top">
                <div className="newsletter-head">Subscribe To Our Email</div>
                <h3 className="newsletter-title">For Latest News & Updates</h3>
                <p className="newsletter-text">
                    Join our community and never miss out on exciting news and updates from us.
                </p>
            </div>
            
            <form className="newsletter-btns" onSubmit={handleSubscribe}>
                <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="newsletter-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>

            {message && <p className="newsletter-message">{message}</p>}
        </div>
    );
}
