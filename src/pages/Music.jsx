import ScrollReveal from '../components/ScrollReveal';
import './Music.css';

const genres = [
  {
    name: 'Top 40 / Pop',
    artists: 'Bruno Mars, Taylor Swift, Dua Lipa, Chappell Roan, Beyoncé, Lady Gaga, Rihanna, Pitbull, Kesha, Katy Perry',
  },
  {
    name: 'Country',
    artists: 'Morgan Wallen, Luke Combs, Garth Brooks, Shania Twain, Chris Stapleton, Zac Brown Band, Johnny Cash',
  },
  {
    name: 'Classic Rock / 70s',
    artists: 'Sweet Home Alabama, Takin\' Care of Business, Sweet Caroline, Brown Eyed Girl',
  },
  {
    name: 'Hair Bands / 80s',
    artists: 'Journey, Bon Jovi, Def Leppard, AC/DC, GN\'R, Poison',
  },
  {
    name: 'Fun 80s Pop',
    artists: 'Madonna, Cyndi Lauper, Whitney Houston, Hall & Oates, Footloose',
  },
  {
    name: 'Motown / Soul',
    artists: 'Temptations, Aretha Franklin, Stevie Wonder, Earth Wind & Fire, Marvin Gaye',
  },
  {
    name: 'Classic Funk / Disco',
    artists: 'Kool and the Gang, Bee Gees, ABBA, KC & the Sunshine Band, Donna Summer',
  },
  {
    name: 'R&B / Rap',
    artists: 'Usher, TLC, Alicia Keys, Drake, Nelly, 50 Cent, Lil Jon, Salt-N-Pepa',
  },
  {
    name: 'Latin',
    artists: 'Bad Bunny, Daddy Yankee, Shakira, Selena, Marc Anthony, J Balvin, Enrique Iglesias',
  },
  {
    name: 'Techno / EDM',
    artists: 'Avicii, Daft Punk, Calvin Harris, Chainsmokers, Zedd, Galantis',
  },
  {
    name: 'Punk Pop',
    artists: 'Blink-182, Fall Out Boy, Paramore, Green Day, Killers, Weezer',
  },
  {
    name: 'Martini Style / Jazz',
    artists: 'Frank Sinatra, Dean Martin, Nat King Cole, Michael Bublé, Bobby Darin',
  },
  {
    name: 'Irish Pub',
    artists: 'Dropkick Murphys, The Proclaimers, Wellerman Dance Mix',
  },
  {
    name: 'Group Dances',
    artists: 'Cupid Shuffle, Electric Slide, YMCA, Macarena, Cha Cha Slide, Thriller, Cotton-Eyed Joe',
  },
];

export default function Music() {
  return (
    <div className="music">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Music for Every Moment</h1>
          <p>
            Paul covers every genre. Tell him what you love, what you hate,
            and he'll take care of the rest — <strong>guaranteed</strong>.
          </p>
        </div>
      </section>

      {/* Genre Grid */}
      <section className="section">
        <div className="container">
          <div className="music__grid">
            {genres.map((genre, i) => (
              <ScrollReveal key={i}>
                <div className="genre-card card">
                  <h3 className="genre-card__name">{genre.name}</h3>
                  <p className="genre-card__artists">{genre.artists}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="music__footer-note">
              <p>
                Don't see your style? Paul has done Polka, Christian, Ratchet, K-Pop,
                and more. Any music you find anywhere is possible — <strong>just ask</strong>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
