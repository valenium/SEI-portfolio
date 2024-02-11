import { useState, useEffect } from "react";
import "./Projects.css";

function Projects(props) {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
    }

    useEffect (() => { getProjectsData() }, [])

    const loaded = () => {
        return projects.map((project, idx) => (
            <div className="project rounded-lg hover:bg-white/30 hover:backdrop-opacity-10" key={idx}>
                <h1 className="text-white font-bebas text-center text-5xl">{project.name}</h1>
                <img className="project-img" src={project.image} />
                <p className="text-center text-white font-oxygen">{project.description}</p>

                <div className="buttons">
                    <a href={project.git}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-oxygen font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-pink-100 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            GitHub
                        </span>
                    </button>
                    </a>
                    <a href={project.live}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-oxygen font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-pink-100 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Live Site
                        </span>
                    </button>
                    </a>
                </div>

            </div>
        ))
    }

    return (
        <>
            <h1 className="text-pink-200 font-bebas text-6xl text-center pb-8">Projects</h1>
            <div className="projects pb-12">
                {projects ? loaded() : <h1>Loading...</h1>}
            </div>
        </>
    )
}
  
  export default Projects;