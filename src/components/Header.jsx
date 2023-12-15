import { Link } from "react-router-dom";

function Header(props) {

    return (
      <header className="nav">
        <nav>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <Link to="/">HOME</Link>
            </div>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <Link to="/about">ABOUT</Link>
            </div>

            {/* <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <Link to="/experience">EXPERIENCE</Link>
            </div> */}

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <Link to="/projects">PROJECTS</Link>
            </div>
          
        </nav>
      </header>
    );
  }
  
  export default Header; 