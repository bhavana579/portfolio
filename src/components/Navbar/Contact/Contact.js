import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = { ...formData, access_key: "7a4c3ed4-3313-4d5a-9b11-0527c34606b2" };

        const json = JSON.stringify(data);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await res.json();

            if (result.success) {
                console.log("Success", result);
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                console.error("Error sending message", result);
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            console.error("Network error", error);
            alert("There was a network error. Please try again.");
        }
    };

    return (
        <div id='contact-me' className='contact-me'>
            <h1>Contact Me</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
