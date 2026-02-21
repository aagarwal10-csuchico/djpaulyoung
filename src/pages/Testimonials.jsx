import ScrollReveal from '../components/ScrollReveal';
import './Testimonials.css';

const testimonialImages = [
  '/testimonial.png',
  '/testimonial-1.jpg',
  '/testimonial-2.jpg',
  '/testimonial-3.jpg',
  '/testimonial-4.jpg',
  '/testimonial-5.jpg',
  '/testimonial-6.jpg',
  '/testimonial-7.jpg',
  '/testimonial-8.jpg',
  '/testimonial-9.jpg',
];

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>What Couples Are Saying</h1>
          <p>
            Real reviews from real weddings across Minnesota.
          </p>
        </div>
      </section>

      {/* Testimonial Images */}
      <section className="section">
        <div className="container">
          <div className="testimonials-page__grid">
            {testimonialImages.map((src, i) => (
              <ScrollReveal key={i}>
                <div className="testimonial-image-card card">
                  <img
                    src={src}
                    alt={`Testimonial ${i + 1}`}
                    className="testimonial-image-card__img"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
