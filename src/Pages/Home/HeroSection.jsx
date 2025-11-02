import { FaEnvelope, FaCode, FaRocket } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      {/* Background decoration */}
      <div className="hero--background--decoration"></div>
      
      <div className="hero--section--content--box">
        <ScrollAnimation animation="fade-up" delay={0.1}>
          <div className="hero--section--content">
            <div className="hero--badge">
              <FaCode className="hero--badge--icon" />
              <span>Full Stack Developer</span>
            </div>
            <p className="section--title hero--greeting">Hello, I'm</p>
            <h1 className="hero--section--title">
              <span className="hero--name">NhanNG</span>
              <br />
              <span className="hero--section-title--color">Full Stack Developer</span>
            </h1>
            <p className="hero--section-description">
              Passionate about building web apps with modern technologies.
              <br /> Always learning and improving every day.
            </p>
            
            <div className="hero--stats">
              <div className="hero--stat--item">
                <div className="hero--stat--number">50+</div>
                <div className="hero--stat--label">Projects</div>
              </div>
              <div className="hero--stat--item">
                <div className="hero--stat--number">3+</div>
                <div className="hero--stat--label">Years Experience</div>
              </div>
              <div className="hero--stat--item">
                <div className="hero--stat--number">100%</div>
                <div className="hero--stat--label">Dedicated</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div className="hero--actions">
            <ScrollLink
              to="Contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary hero--cta--primary"
            >
              <FaEnvelope />
              Get In Touch
            </ScrollLink>
            <ScrollLink
              to="MyPortfolio"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-outline-primary hero--cta--secondary"
            >
              <FaRocket />
              View My Work
            </ScrollLink>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animation="fade-right" delay={0.2}>
        <div className="hero--section--img">
          <div className="hero--img--wrapper">
            <div className="hero--img--glow"></div>
            <img src="./img/ava.jpg" alt="NhanNG - Full Stack Developer" />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
