import { useState, useEffect } from "react";
import "./About.css";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="about mb-28">
      <h1 className="text-pink-200 font-bebas text-6xl text-center mb-4">
        About Me
      </h1>
      <div className="about-text font-oxygen text-sm">
        <p>
          I am a <strong>Full-Stack Software Engineer</strong> with a diverse
          background in{" "}
          <strong>
            product management, customer success, project management,
            operations,
          </strong>{" "}
          and <strong>management</strong>. After spending 3 years working in
          gaming and cybersecurity, I decided to become more technical after
          realizing I was much more interested in development. My unique blend of developer experience combined with my
          obsession with organization and efficiency allow me to bridge the gap
          between technical and non-technical stakeholders.
        </p>
        <br />
        <p>
          I've had the opportunity to lead the development of features on FC 24
          such as the main menu redesign and closed beta, where I organized and
          collaborated with large multidiscplinary and cross-functional teams
          throughout the organization. My experience includes building a
          team from the ground up at an early stage cybersecurity startup, where
          I had a strong influence on product design, customer success, and
          operational processes.{" "}
          <strong>
            Now that I have graduated from a Full Stack Development bootcamp, I
            am ready and excited to bring my ambition and drive into building
            meaningful solutions.
          </strong>
        </p>
        <br />
        <p>
          I have been consistently awarded for{" "}
          <strong>championing positive work culture and positivity</strong>. One
          of the most important things to me is collaborating in a meaningful
          and thoughtful way with my peers, in and out of the workplace. I truly
          believe that the positivity and energy I bring into my work enables me
          to be a passionate contributor that promotes the same energy from my
          team.
        </p>
        <br />
        <p>
          On a more personal note, I am extremely passionate about issues
          related to sustainability and self-determination. I am also an avid
          gamer, amateur baker, fitness junkie, and mother to an extremely
          stubborn dog.
        </p>
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
