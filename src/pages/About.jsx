import { useState, useEffect } from "react";
import "./About.css";

function About(props) {
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => { getAboutData() }, [])

    const loaded = () => (
        <div className="about px-20 py-6">
            <div>
                <h1 className="text-pink-200 font-bebas text-6xl">About Me</h1>
                <h3 className="text-white font-oxygen text-xl">{about.bio}</h3>
            </div>

            <div className="w-52">
                <h2 className="font-oxygen text-white text-3xl pb-5 font-semibold">Hobbies</h2>
                <ul>
                {
                    about.hobbies.map((hobby, idx) =>(
                        <div key={idx}>
                            <li className="flex justify-around font-oxygen text-white text-xl"><img src={hobby.icon} alt={hobby.hobby}/>
                            <div className="text-start w-11">
                                {hobby.hobby}
                            </div>
                            </li>
                        </div>
                    ))
                }
                </ul>
            </div>

        </div>
    )

    return about ? loaded(): <h1>Loading...</h1>;
}
  
  export default About;
  