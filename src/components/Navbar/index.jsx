import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {
      navbar.classList.add("navbar__fixed");
    } else {
      navbar.classList.remove("navbar__fixed");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMenu);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <a href="#">Startupz</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#hiring" className="navbar__menu--btn button-1">
                Work with us!
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`navbar__burger ${menu ? "active" : ""}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar__burger--menu ${menu ? "active" : ""}`}>
          <div className="navbar__burger--menu-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar__burger--menu-close">
            <div
              className={`navbar__burger ${menu ? "active" : ""}`}
              onClick={() => setMenu(!menu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul>
            <li>
              <a href="#" onClick={() => setMenu(!menu)}>
                Startupz
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenu(!menu)}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="#hiring"
                className="navbar__menu--btn button-1"
                onClick={() => setMenu(!menu)}
              >
                Work with us!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
