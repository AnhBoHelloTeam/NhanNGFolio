import data from "../../data/index.json";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function MyPortfolio() {
  const buttonStyle = {
    padding: "10px 20px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
  };

  const githubButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #24292f 0%, #1a1d23 100%)",
  };

  const demoButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  };

  const githubLinkStyle = {
    textDecoration: "none",
    flex: 1,
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <p className="sub--title">Recent Projects</p>
            <h2 className="section--heading">My Projects</h2>
          </div>
        <div>
          <a
            href="https://github.com/AnhBoHelloTeam"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn btn-github"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                backgroundColor: "#24292f",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748Z"
                  fill="currentColor"
                />
              </svg>
              View My GitHub
            </button>
          </a>
        </div>
        </div>
      </ScrollAnimation>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <ScrollAnimation 
            key={index} 
            animation="fade-up" 
            delay={index * 0.1}
          >
            <div className="portfolio--card">
            <div className="portfolio--image--wrapper">
              <img src={item.src} alt={item.title} className="portfolio--image" />
              <div className="portfolio--overlay"></div>
            </div>

            <div className="portfolio--card--content">
              <h3 className="portfolio--card--title">{item.title}</h3>
              <p className="portfolio--card--description">{item.description}</p>

              <div className="portfolio--card--buttons">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={githubLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <button style={githubButtonStyle}>GitHub</button>
                  </a>
                )}

                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={githubLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(102, 126, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <button style={demoButtonStyle}>Live Demo</button>
                  </a>
                )}
              </div>
            </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}