import { HashLink as Link } from "react-router-hash-link";
import { Routes, Route } from "react-router-dom";
import Icon from "./Icons";
import "./Header.css";

function Header() {
  const iconLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/valerie-a-lim/e",
      icon: "linkedin-logo",
    },
    {
      label: "GitHub",
      href: "https://github.com/valenium",
      icon: "github-logo",
    },
    { label: "Email", href: "valerieamberlim@gmail.com", icon: "mail" },
  ];

  return (
    <header className="nav">
      <nav>
        <div className="nav-links">
          <div className="text-white font-oxygen text-xl hover:text-pink-200 hover:font-extrabold mt-4">
            <a href="#home-section">HOME</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 hover:font-extrabold mt-4">
            <a href="#about-section">ABOUT</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 hover:font-extrabold mt-4">
            <a href="#projects-section">PROJECTS</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 hover:font-extrabold mt-4">
            <a href="#experience-section">EXPERIENCE</a>
          </div>
        </div>

        <div className="menu-footer">
          
          <div className="socials">
            {iconLinks.map(({ href, icon, label }) => (
              <a key={href} href={href} className="social">
                <span className="sr-only">{label}</span>
                <Icon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
