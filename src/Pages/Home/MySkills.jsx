import data from "../../data/index.json";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <div className="portfolio--container">
          <p className="section--title">My Skills</p>
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>
      </ScrollAnimation>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <ScrollAnimation 
            key={index} 
            animation="fade-up" 
            delay={index * 0.1}
          >
            <div className="skills--section--card">
              <div className="skills--section--img">
                <div className="skills--img--glow"></div>
                <img
                  src={item.src}
                  alt={item.title}
                />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
