import data from "../../data/index.json";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  const buttonStyle = {
    padding: "8px 14px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
  };

  const githubButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#24292f",
  };

  const demoButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#0366d6",
  };

  const detailsButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
  };

  const githubLinkStyle = {
    textDecoration: "none",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "360px",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  };

  const imageStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "8px",
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Dự Án Gần Đây</p>
          <h2 className="section--heading">Danh Mục Dự Án</h2>
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
              Xem GitHub Của Tôi
            </button>
          </a>
        </div>
      </div>

      <div
        className="portfolio--section--container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {data?.portfolio?.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div className="portfolio--section--img">
              <img src={item.src} alt={item.title} style={imageStyle} />
            </div>

            <div className="portfolio--section--card--content" style={{ flexGrow: 1, marginTop: "16px" }}>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md" style={{ minHeight: "60px" }}>
                {item.description}
              </p>

              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={githubLinkStyle}
                >
                  <button style={githubButtonStyle}>GitHub</button>
                </a>

                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={githubLinkStyle}
                >
                  <button style={demoButtonStyle}>Live Demo</button>
                </a>

                <Link to={`/portfolio/${item.id}`} style={githubLinkStyle}>
                  <button style={detailsButtonStyle}>Xem Chi Tiết</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}