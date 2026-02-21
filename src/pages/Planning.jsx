import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import './Planning.css';

const sections = [
  {
    title: 'Ceremony',
    content: `Paul provides up to 6 music cues for the ceremony — parents, grandparents, groom, wedding party, flower girl, and the bride. Creative entrances are always welcome (one groomsmen crew formed a path with sunglasses for the groom's entrance!).

During the ceremony, Paul can provide unity music, worship sing-alongs, or any special selections. For the recessional, Paul starts an upbeat song softly about 30 seconds before the walk begins, blending it with the officiant's voice, then turns it up at the first introduction as the couple walks out.`,
  },
  {
    title: 'Reception & Grand Entrance',
    content: `For social hour, Paul plays Sinatra-style jazz — what he calls "Martini Style" — setting a relaxed, elegant tone. Dinner music shifts to upbeat solo piano.

For the Grand Entrance, Paul learns every name and pronunciation, coordinates with the photographer, and plots the path to the head table. A crowd favorite is "Celebration" by Kool and the Gang — Paul ties the lyrics into the introductions with audience call-and-response moments that get everyone on their feet.`,
  },
  {
    title: 'Timeline Coordination',
    content: `Paul coordinates every key moment: toasts (cued after all guests are served), cake cutting, sunset photos, spotlighting parents for special dances, and rounding up the wedding party when needed.

Paul uses a cordless mic for mobility plus a second mic for dual introductions. Every transition is seamless, keeping your event running on time without feeling rushed.`,
  },
  {
    title: 'Spotlight Dances & Shoe Game',
    content: `First Dance, Father/Daughter, and Mother/Son dances are handled with care — any song can be faded out early if needed. No awkward endings.

Optional: The Shoe Game can be played before the first dance — 2 to 3 minutes of customized questions that get huge laughs and naturally draw guests toward the dance floor. It's a perfect icebreaker.`,
  },
  {
    title: 'Dance Floor Options',
    content: `Anniversary Dance, Bouquet Toss, Garter, Dollar Dance, group dances, dismissal games, photo dash — all completely optional. None are launched without your approval.

Paul uses a simple music survey code system: YYY means "must play," and NNN means "do not play, even if a guest requests it." You stay in full control of the vibe.`,
  },
  {
    title: 'End of Night',
    content: `Closing song options include crowd favorites like Don't Stop Believin', Piano Man, Closing Time, Shout!, and Take Me Home Country Roads.

Want something more intimate? Paul can arrange a private last dance just for the two of you before the night ends.`,
  },
];

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
      <button className="accordion-item__header" onClick={onToggle}>
        <h3>{title}</h3>
        <HiOutlineChevronDown className="accordion-item__icon" />
      </button>
      <div className="accordion-item__body">
        <div className="accordion-item__content">
          {content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Planning() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="planning">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Planning Your Perfect Day</h1>
          <p>
            Paul provides a written guarantee to follow your taste in music — including
            Must Play and Do Not Play lists. He gathers every song choice in advance to
            ensure everything is licensed and downloaded.
          </p>
          <p>
            Keep it simple with general rules, or dictate exact tracks — even
            specific segments of each song. It's your wedding, your way.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section">
        <div className="container planning__accordion">
          {sections.map((s, i) => (
            <ScrollReveal key={i}>
              <AccordionItem
                title={s.title}
                content={s.content}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
