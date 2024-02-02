import { HashLink as Link } from "react-router-hash-link";
import { Routes, Route } from 'react-router-dom';

function Header() {

    return (
      <header className="nav">
        <nav>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <a href="#home-section">HOME</a>
            </div>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <a href="#about-section">ABOUT</a>
            </div>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <a href="#projects-section">PROJECTS</a>
            </div>

            <div className="text-white font-bebas text-3xl hover:text-pink-200 hover:font-extrabold">
              <a href="#experience-section">EXPERIENCE</a>
            </div>

            <div className="nav-icons">
              <div>
                  <a className="flex justify-center font-oxygen text-white text-l hover:font-semibold hover:text-pink-200" href="https://www.linkedin.com/in/valerie-a-lim/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="pink" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.511 1.511 0 0 1-1.5 1.5H5.56a1.511 1.511 0 0 1-1.5-1.5V5.56a1.511 1.511 0 0 1 1.5-1.5h12.88a1.511 1.511 0 0 1 1.5 1.5Z"/><path fill="pink" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z"/><circle cx="7.376" cy="6.744" r="1" fill="pink"/><path fill="pink" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.609 3.609 0 0 1 5.39 3.15"/></svg>
                  </a>
                </div>

                <div>
                  <a className="flex justify-center font-oxygen text-white text-xl hover:font-semibold hover:text-pink-200" href="https://github.com/valenium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="pink" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"/><path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.211 3.211 0 0 0-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 0 0 7 8.464a3.482 3.482 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 0 0-.496.773a2.134 2.134 0 0 0-.13.902V19"/><path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948"/></g></svg>
                  </a>
                </div>

                <div>
                  <a className="flex justify-center font-oxygen text-white text-xl hover:font-semibold hover:text-pink-200" href="mailto: valerieamberlim@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="pink" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>                  
                  </a>
                </div>
              </div>
          
        </nav>
      </header>
    );
  }
  
  export default Header; 