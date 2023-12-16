import React, { useState } from 'react';
import Header from './Header';
import StickyFooter from './Footer'
import './contact.css'; // Import the CSS file




const Contact = () => {
  const [message, setMessage] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send message and complaint data to your backend API
    // Clear form fields or show a success message
  };



  return (
    <>
        <div className="contact-container">
      <Header />
      <div className="contact-content">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="complaint">Raise a Complaint:</label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
<StickyFooter />

    </>

  );
};

export default Contact;
