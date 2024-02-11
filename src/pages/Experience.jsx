import { useState, useEffect } from "react";
import "./Experience.css";

function Experience(props) {
    const [experience, setExperience] = useState(null)

    const getExperienceData = async () => {
        const response = await fetch("./experience.json")
        const data = await response.json()
        setExperience(data)
    }

    useEffect(() => {getExperienceData()}, [])
    
    const loaded = () => {
        return experience.map((exp, idx) => (
            <div key={idx} className="experience">
                <h1 className="text-white font-bebas text-4xl drop-shadow-xl">{exp.title} | {exp.company}</h1>
                <h2 className="text-white font-bebas text-2xl">{exp.date}</h2>                
                <p>{exp.description}</p>
                <ul>
                    {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                    ))}
                </ul>
            </div>
            ))
        }

    return (
        <div className="experience-page">
            <h1 className="text-pink-200 font-bebas text-6xl text-center pb-8">Experience</h1>
            <div className="experience-flex">
                {experience ? loaded(): <h1>Loading...</h1>}
            </div>
        </div>
    )
  }
  
  export default Experience;