import './Hero.css';

interface HeroProps {
  imageUrl: string;
  title: string;
  content: string;
  link: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, content, link }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-overlay">
        <div className="hero-card">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-content-text">{content}</p>
          <a href={link} className="btn hero-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
