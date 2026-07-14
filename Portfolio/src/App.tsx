import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css"

function App(){
    let CardsSrc = ["/src/assets/hero.png", "/src/assets/react.svg", "/src/assets/vite.svg", "/src/assets/hero.png", "/src/assets/react.svg", "/src/assets/vite.svg", "/src/assets/hero.png", "/src/assets/react.svg", "/src/assets/vite.svg"];

    let CardsShortData = ["yay", "I am inevitable", "I never give up", "yay", "I am inevitable", "I never give up", "yay", "I am inevitable", "I never give up"];

    let altText = ["Hero Image", "React Logo", "Vite Logo", "Hero Image", "React Logo", "Vite Logo", "Hero Image", "React Logo", "Vite Logo"];

    let heading = ["Portfolio", "React", "Vite", "Portfolio", "React", "Vite", "Portfolio", "React", "Vite"];

    let body = ["This is my portfolio website built using React and Vite. It showcases my projects and skills.", "React is a JavaScript library for building user interfaces.", "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.", "This is my portfolio website built using React and Vite. It showcases my projects and skills.", "React is a JavaScript library for building user interfaces.", "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.", "This is my portfolio website built using React and Vite. It showcases my projects and skills.", "React is a JavaScript library for building user interfaces.", "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects."];

    let githubLink = ["https://github.com", "https://github.com", "https://github.com", "https://github.com", "https://github.com", "https://github.com", "https://github.com", "https://github.com", "https://github.com"];

    let liveLink = ["https://myportfolio.com", "https://reactjs.org", "https://vitejs.dev", "https://myportfolio.com", "https://reactjs.org", "https://vitejs.dev", "https://myportfolio.com", "https://reactjs.org", "https://vitejs.dev"];

    return (
        <div className="scroll-container">
            <Home></Home>
            <Projects CardsSrc={CardsSrc} CardsShortData={CardsShortData} altText={altText} heading={heading} body={body} githubLink={githubLink} liveLink={liveLink}></Projects>
        </div>
    )
}

export default App;