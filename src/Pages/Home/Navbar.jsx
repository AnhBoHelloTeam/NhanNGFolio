import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const isCVPage = location.pathname === "/cv";

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link to="/" onClick={() => setNavActive(false)}>
          <img src="./img/logo.svg" alt="NhanNG Portfolio" />
        </Link>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {isCVPage ? (
            <>
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#MyPortfolio"
                  onClick={(e) => {
                    closeMenu();
                    // If already on home, use scroll
                    if (location.pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("MyPortfolio");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.scrollBy(0, -70); // Account for navbar
                      }
                    }
                  }}
                  className="navbar--content"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#AboutMe"
                  onClick={(e) => {
                    closeMenu();
                    if (location.pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("AboutMe");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.scrollBy(0, -70);
                      }
                    }
                  }}
                  className="navbar--content"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonial"
                  onClick={(e) => {
                    closeMenu();
                    if (location.pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("testimonial");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.scrollBy(0, -70);
                      }
                    }
                  }}
                  className="navbar--content"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/#Contact"
                  onClick={(e) => {
                    closeMenu();
                    if (location.pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("Contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.scrollBy(0, -70);
                      }
                    }
                  }}
                  className="navbar--content"
                >
                  Contact
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar--content"
                >
                  Portfolio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="navbar--content"
                >
                  About Me
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonial"
                  className="navbar--content"
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <Link
                  to="/cv"
                  onClick={closeMenu}
                  className="navbar--content"
                >
                  View CV
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {!isCVPage && (
        <ScrollLink
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-outline-primary"
        >
          Contact Me
        </ScrollLink>
      )}
    </nav>
  );
}

export default Navbar;