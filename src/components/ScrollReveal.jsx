import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ScrollReveal({ children, className = '', stagger = false, threshold = 0.15 }) {
  const [ref, isVisible] = useScrollReveal(threshold);
  const baseClass = stagger ? 'reveal-stagger' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
