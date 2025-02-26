import React from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize EmailJS with your actual public key
emailjs.init('td4JSbyBD180R9giq');

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const userName = event.target.elements.name.value;
    const userEmail = event.target.elements.email.value;
    const userPhone = event.target.elements.phone.value;
    const userMessage = event.target.elements.message.value;

    if (!userEmail || !userMessage) {
      console.error('Email and message are required.');
      return;
    }

    sendEmails(userName, userEmail,userPhone, userMessage);
  };

  const sendEmails = (userName, userEmail,userPhone, userMessage) => {
    const userTemplateParams = {
      to_name: userName,
      to_email: userEmail,
      to_phone: userPhone,
      message: userMessage,
    };

    const adminTemplateParams = {
      from_name: userName,
      from_email: userEmail,
      from_phone: userPhone,
      message: userMessage,
    };

    // Send confirmation email to the user
    emailjs.send('service_bu07g0e', 'USER_TEMPLATE_ID', userTemplateParams, 'td4JSbyBD180R9giq')
      .then((response) => {
        console.log('User confirmation email sent!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send user confirmation email...', err);
      });

    // Send detailed message to the admin
    emailjs.send('service_bu07g0e', 'ADMIN_TEMPLATE_ID', adminTemplateParams, 'td4JSbyBD180R9giq')
      .then((response) => {
        console.log('Admin notification email sent!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send admin notification email...', err);
      });
  };

  return (
    <div className="contact-section">
      <div className="container">
        <h1 className="section-title">Get in Touch</h1>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6 mb-4">
            <h2 className="info-title">Contact Information</h2>
            <ul className="list-unstyled">
              <li className="info-detail">
                <i className="bi bi-telephone-fill me-2"></i>
                +91 (555) 123-4567
              </li>
              <li className="info-detail">
                <i className="bi bi-envelope-fill me-2"></i>
                irecoolingservice@gmail.com
              </li>
              <li className="info-detail">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Sector-3,Faridabad<br />
                Haryana,121007
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow-sm custom-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone no.</label>
                  <input type="number" id="email" name="phone" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Address</label>
                  <textarea id="message" name="message" rows="4" className="form-textarea" required></textarea>
                </div>
                <button type="submit" className="btn-submit">Request a call</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
