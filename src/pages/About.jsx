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
        <div className="about px-20 py-6">
            <div>
                <h1 className="text-pink-200 font-bebas text-6xl">{about.name}</h1>
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

            <div>
                <a className="flex text-white font-oxygen text-2xl font-semibold hover:text-pink-200" href={about.resume}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32s" viewBox="0 0 20 20"><path fill="pink" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2zM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207z"/></svg>
                    <p className="pl-3">Resume</p>
                </a>
            </div>

        </div>
    )

    return about ? loaded(): <h1>Loading...</h1>;
}
  
  export default About;
  