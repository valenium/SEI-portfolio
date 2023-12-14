import { useState, useEffect } from "react";

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
            <div key={idx}>
                <h1>{project.name}</h1>
                <img src={project.image} />
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
        ))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}
  
  export default Projects;