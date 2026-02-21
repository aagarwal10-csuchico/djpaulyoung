import { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    weddingDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Let's Make Your Wedding Unforgettable</h1>
          <p>
            Call any time for planning assistance. Paul is available to answer
            questions, walk you through the planning process, or schedule a video conference.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="contact__info">
                <div className="contact__info-card card">
                  <div className="contact__info-item">
                    <span className="contact__info-icon"><HiOutlinePhone /></span>
                    <div>
                      <h4>Call Paul</h4>
                      <a href="tel:9522394115">952.239.4115</a>
                    </div>
                  </div>

                  <div className="contact__info-item">
                    <span className="contact__info-icon"><HiOutlineMail /></span>
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:discjockeypaulyoung@gmail.com">discjockeypaulyoung@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact__info-item">
                    <span className="contact__info-icon"><HiOutlineCalendar /></span>
                    <div>
                      <h4>Video Conference</h4>
                      <p>Schedule a virtual meeting to discuss your vision</p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:discjockeypaulyoung@gmail.com?subject=Video%20Conference%20Request"
                  className="btn btn-primary contact__cta-btn"
                >
                  Schedule a Video Conference Today
                </a>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal>
              <div className="contact__form-wrapper card">
                {submitted ? (
                  <div className="contact__success">
                    <span className="contact__success-icon">✓</span>
                    <h3>Thank You!</h3>
                    <p>Your message has been received. Paul will be in touch soon.</p>
                  </div>
                ) : (
                  <form className="contact__form" onSubmit={handleSubmit}>
                    <h3>Send a Message</h3>

                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="First & Last Name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="weddingDate">Wedding Date</label>
                      <input
                        type="date"
                        id="weddingDate"
                        name="weddingDate"
                        value={form.weddingDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell Paul about your event..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary contact__submit">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
