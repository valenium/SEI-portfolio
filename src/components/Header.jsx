import { useState } from "react";

import Icon from "./Icons";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

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
    { label: "Email", href: "mailto:valerieamberlim@gmail.com", icon: "mail" },
  ];

  return (
    <header className="nav">
      <nav>
        <div className="nav-links">
          <div className="text-white font-oxygen text-xl hover:text-pink-200 mt-4">
            <a href="#home-section">HOME</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 mt-4">
            <a href="#about-section">ABOUT</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 mt-4">
            <a href="#projects-section">PROJECTS</a>
          </div>

          <div className="text-white font-oxygen text-xl hover:text-pink-200 mt-4">
            <a href="#experience-section">EXPERIENCE</a>
          </div>

        </div>

        <button className="icon" onClick={toggleMenu}>
                &#9776; {/* This is a simple text representation of a hamburger icon */}
            </button>
            {isOpen && (
                <div className="mobile-menu">
                    <a href="#home-section" onClick={toggleMenu}>HOME</a>
                    <a href="#about-section" onClick={toggleMenu}>ABOUT</a>
                    <a href="#projects-section" onClick={toggleMenu}>PROJECTS</a>
                    <a href="#experience-section" onClick={toggleMenu}>EXPERIENCE</a>
                </div>
            )}

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
