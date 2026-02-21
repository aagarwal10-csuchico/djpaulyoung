import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineMail, HiOutlineMusicNote, HiOutlineShieldCheck, HiOutlineAcademicCap, HiOutlineStar } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const credentials = [
  { icon: <HiOutlineMusicNote />, stat: '1,000+', label: 'Ceremonies Performed' },
  { icon: <HiOutlineShieldCheck />, stat: 'Written', label: 'Music Guarantee' },
  { icon: <HiOutlineAcademicCap />, stat: 'UST', label: 'University of St. Thomas Graduate' },
  { icon: <HiOutlineStar />, stat: 'Featured', label: 'Minnesota Bride Magazine' },
];

const testimonials = [
  {
    quote: 'Wow! Of all the vendors we used for our wedding, DJ Paul Young was the BEST! ... Truly, a diamond in the rough in the DJ world.',
    author: 'Connie A.',
    location: 'Anoka, MN',
  },
  {
    quote: 'We had an INCREDIBLE time at our wedding!! Paul was absolutely great!! We could tell he was having a good time with all of us.',
    author: 'Brooke B.',
    location: '',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__inner container">
          <div className="hero__content">
            <h1 className="hero__title">Your Wedding. Your Music. <em>Guaranteed.</em></h1>
          <p className="hero__subtitle">
            Twin Cities DJ with 1,000+ ceremonies and a written music guarantee.
          </p>
          <div className="hero__contact">
            <a href="tel:9522394115" className="hero__contact-item">
              <HiOutlinePhone /> 952.239.4115
            </a>
            <a href="mailto:discjockeypaulyoung@gmail.com" className="hero__contact-item">
              <HiOutlineMail /> discjockeypaulyoung@gmail.com
            </a>
          </div>
          <Link to="/contact" className="btn btn-primary hero__cta">
            Schedule a Video Conference
          </Link>
          </div>
          <div className="hero__photo">
            <img src="/Paul-Young.png" alt="DJ Paul Young" />
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="credentials section">
        <ScrollReveal stagger>
          <div className="credentials__grid container">
            {credentials.map((c, i) => (
              <div key={i} className="credentials__card card">
                <span className="credentials__icon">{c.icon}</span>
                <span className="credentials__stat">{c.stat}</span>
                <span className="credentials__label">{c.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">What Couples Are Saying</h2>
            <p className="section-subtitle">
              Real reviews from real weddings across Minnesota.
            </p>
          </ScrollReveal>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i}>
                <blockquote className="testimonial card">
                  <div className="testimonial__quote-mark">&ldquo;</div>
                  <p className="testimonial__text">{t.quote}</p>
                  <footer className="testimonial__author">
                    <strong>{t.author}</strong>
                    {t.location && <span>{t.location}</span>}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner__inner">
              <h2>Ready to Talk?</h2>
              <p>Call or email anytime — Paul is here to help plan your perfect day.</p>
              <div className="cta-banner__actions">
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
