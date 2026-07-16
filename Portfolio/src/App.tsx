import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css"
import {useRef, useEffect} from "react"

function App(){
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let visible = false;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !visible) {
                visible = true;
                element.classList.add("glitch");
            }

            if (!entry.isIntersecting) {
                visible = false;
            }
        }, {
            threshold: 0.5
        });

        observer.observe(element);

        const end = () => element.classList.remove("glitch");
        element.addEventListener("animationend", end);

        return () => {
            observer.disconnect();
            element.removeEventListener("animationend", end);
        };
    }, []);
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
            <Skills></Skills>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    )
}

export default App;