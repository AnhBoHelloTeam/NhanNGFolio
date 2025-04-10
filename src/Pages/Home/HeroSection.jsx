import { FaEnvelope } from "react-icons/fa"; // 👈 import icon

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm NhanNG</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Fullstack Developer passionate about building web apps.
            <br /> Always learning and improving every day.
          </p>
        </div>

        {/* Nút với icon */}
        <button className="btn btn-primary">
          <FaEnvelope style={{ marginRight: "8px" }} />
          Get In Touch
        </button>
      </div>

      <div className="hero--section--img">
        <img src="./img/ava.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
