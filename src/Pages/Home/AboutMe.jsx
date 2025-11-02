import ScrollAnimation from "../../components/ScrollAnimation";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <ScrollAnimation animation="fade-left" delay={0.1}>
        <div className="about--section--img">
          <div className="about--img--wrapper">
            <div className="about--img--glow"></div>
            <img
              src="./img/lumcay.jpg"
              alt="Nguyễn Thành Nhân - Full Stack Developer"
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-right" delay={0.2}>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About Me</p>
            <h2 className="section--heading">Hi, I'm <span className="about--name--highlight">Nguyễn Thành Nhân</span></h2>
            <div className="about--content--wrapper">
              <p className="hero--section-description">
                I'm a passionate Information Technology student at DongA University, driven by a love for coding and problem-solving. My journey in tech began with a curiosity for how software shapes our world, leading me to explore programming through self-learning and hands-on projects. Whether it's building web applications or diving into backend systems, I thrive on turning ideas into functional solutions. My goal is to become a skilled fullstack developer, blending creativity and technical expertise to create impactful software.
              </p>
              <p className="hero--section-description">
                I have hands-on experience with C++, Node.js, Spring Boot, Python, and Django, and I'm currently expanding my skills in Flutter and NestJS. I've built personal projects like web and mobile apps, contributed to technical support at DongA University, and managed SEO for a local business, sharpening my ability to deliver real-world results. My strength lies in my commitment to learning and adapting to new technologies, ensuring I stay at the forefront of innovation.
              </p>
              <p className="hero--section-description">
                I'm actively seeking internship and job opportunities in Da Nang to grow as a fullstack developer and contribute to meaningful projects. If you're looking for a dedicated, tech-savvy team member, I'd love to connect! Reach out at <a href="mailto:nhanng.thdhk4@gmail.com" className="about--email--link">nhanng.thdhk4@gmail.com</a> or explore my portfolio and CV to learn more about my work. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}