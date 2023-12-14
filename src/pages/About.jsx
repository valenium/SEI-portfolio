import { useState, useEffect } from "react";

function About(props) {
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => { getAboutData() }, [])

    const loaded = () => (
        <div className="about-grid">
            <div>
                <h1 className="text-pink-200 font-bebas text-6xl">{about.name}</h1>
                <h3 className="text-white font-oxygen text-xl">{about.email}</h3>
            </div>

            <div>
                <h3 className="text-white font-oxygen text-xl">{about.bio}</h3>
            </div>

        </div>
    )

    return about ? loaded(): <h1>Loading...</h1>;
}
  
  export default About;
  