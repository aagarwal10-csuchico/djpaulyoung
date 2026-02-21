import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import './Video.css';

export default function Video() {
  return (
    <div className="video-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>See Paul in Action</h1>
          <p>
            Watch how Paul brings energy, professionalism, and fun to every celebration.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="video-page__embed-wrapper">
              <div className="video-page__embed">
                <iframe
                  src="https://www.youtube.com/embed/Rv289W2tcLI?start=1"
                  title="DJ Paul Young Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-page__iframe"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className="video-page__cta section">
        <div className="container">
          <ScrollReveal>
            <div className="video-page__cta-inner">
              <h2>Like What You See?</h2>
              <p>Schedule a video conference today to talk through your vision.</p>
              <div className="video-page__cta-actions">
                <a href="tel:9522394115" className="btn btn-white">
                  <HiOutlinePhone /> 952.239.4115
                </a>
                <a href="mailto:discjockeypaulyoung@gmail.com" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
                  <HiOutlineMail /> Email Paul
                </a>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Schedule a Video Conference
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
