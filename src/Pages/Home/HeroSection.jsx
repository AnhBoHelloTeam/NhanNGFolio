import { FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content animate-fade-in">
          <p className="section--title">Hello, I'm NhanNG</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Fullstack Developer passionate about building web apps with modern technologies.
            <br /> Always learning and improving every day.
          </p>
        </div>

        <ScrollLink
          to="Contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="btn btn-primary"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <FaEnvelope />
          Get In Touch
        </ScrollLink>
      </div>

      <div className="hero--section--img animate-slide-up">
        <img src="./img/ava.jpg" alt="NhanNG - Full Stack Developer" />
      </div>
    </section>
  );
}
