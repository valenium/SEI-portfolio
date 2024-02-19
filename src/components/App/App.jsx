import "./App.css";

// IMPORT COMPONENTS
import Header from "../Header";
import { Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Experience from "../../pages/Experience";
import ContactForm from "../../pages/ContactForm";

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <div id="home-section"><Home /></div>
        <div id="about-section" className="mt-4"><About /></div>
        <div id="projects-section" className="mb-28"><Projects /></div>
        <div id="experience-section"><Experience /></div>
        <div id="contact-section"><ContactForm /></div>
      </main>
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/experience" element={<Experience />} /> */}
      </Routes>
    </div>
  );
}

export default App;