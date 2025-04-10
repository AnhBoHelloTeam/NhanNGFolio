export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/lumcay.jpg"
          alt="About Me"
          style={{
            borderRadius: "16px", // 👈 bo nhẹ các góc
            // width: "300px",       // 👈 chỉnh theo kích thước mong muốn
            height: "auto",
            objectFit: "cover"
          }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Hi 👋, I'm NhanNG</h1>
          <p className="hero--section-description">
          🔭 I’m currently working at DongA University.
          </p>
          <p className="hero--section-description">
          🌱 I’m currently learning C++, Node.js, Spring Boot, Python, Django, ...
          </p>
          <p className="hero--section-description">
          👯 Looking for internship and job opportunities in Da Nang.
          </p>
          <p className="hero--section-description">
          💬 Ask me about C++, Node.js, Spring Boot, Python, Django, ...
          </p>
          <p className="hero--section-description">
          📫 Contact me: nhanng.thdhk4@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
