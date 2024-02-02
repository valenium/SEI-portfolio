import "./Home.css";
import Pill from "../components/Pill";
import Scroller from "../components/Scroller"

function Home(props) {
    const roles = [
        'Software Development',
        'Product Management',
        'Project Management',
        'CyberSecurity',
        'Operations'
    ]

    return (
    <div className="home-page">
        <div className="col-span-2">
            <h1 className="text-pink-200 font-bebas text-9xl text-center">Valerie Lim</h1>
            <h2 className="text-white text-4xl text-center font-bebas">Full Stack Engineer & Product Manager</h2>
        </div>
        <div>
            <img src="/public/me.png" alt="Animated photo of Valerie"/>
        </div>
        <div className="flex justify-center flex-col pr-10">
            <Scroller texts={roles} />
        </div>
        
    </div>
    )
  }
  
  export default Home;