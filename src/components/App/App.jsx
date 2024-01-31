import "./App.css";

// IMPORT COMPONENTS
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Experience from "../../pages/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="home-page">
        <div className="col-span-2">
          <h1 className="text-pink-200 font-bebas text-9xl text-center">
            Valerie Lim
          </h1>
        </div>
        <div>
          <img src="/public/me.png" alt="Animated photo of Valerie" />
        </div>
        <div className="flex justify-center flex-col pr-10">
          <h2 className="p-4 text-white font-oxygen text-2xl text-right">
            Full Stack Developer
          </h2>
          <h2 className="p-4 text-white font-oxygen text-2xl text-right">
            Product Manager
          </h2>
        </div>
      </div>
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/experience" element={<Experience />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
