import axios from "axios";
import React, { useState } from 'react';

export default function Contact() {
    const [emailPhone, setEmailPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!emailPhone.trim()) {
        setErrorMessage('Check email or phone');
        return;
        }

        if (!message.trim()) {
        setErrorMessage('Check message');
        return;
        }

        const data = {
        emailPhone,
        message
        };

        try {
        const response = await axios.post("https://backend.leadaccessnow.com/contactnorman", data);
        if (response.status === 201) {
            setErrorMessage('Sent successfully!');
        } else {
            setErrorMessage('Error contacting Norman');
        }
        } catch (error) {
        setErrorMessage('Error contacting Norman');
        }
    };
    
    return (
        <div id="contact" className="section">
            <div className="contact-social-buttons">
                <a href="https://github.com/norman135" className="contact-social-button github-button"><i className="fa-brands fa-github"></i> Github</a>
                <a href="https://linkedin.com/in/norman135" className="contact-social-button linkedin-button"><i className="fa-brands fa-linkedin"></i> Linked<b>In</b></a>
            </div>
            <div className="contact-form-section">
                <div className="contact-form-form">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            className="form-input"
                            type="text"
                            name="email"
                            placeholder="Your email or phone"
                            value={emailPhone}
                            onChange={(e) => {setEmailPhone(e.target.value)}}
                        />
                        <textarea
                            name="message"
                            className="form-area"
                            placeholder="Your message."
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}}
                        />
                        <p className="error-message" style={{ display: errorMessage ? 'block' : 'none', color: errorMessage === 'Sent successfully!' ? 'green' : 'red' }}>{errorMessage}</p>
                        <button type="submit" className="form-submit"><i className="fa-solid fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}