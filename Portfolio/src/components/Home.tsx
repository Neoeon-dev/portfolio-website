import "./Home.css"
import useGlitch from "../hooks/useGlitch";
import { useRef, useState, type RefObject } from "react";

function Home(){

    let [isHovered, setIsHovered] = useState(false);
    let [isClicked, setIsClicked] = useState(false);

    let leftHeadingRef = useRef<HTMLHeadingElement>(null);
    let leftParagraphRef = useRef<HTMLParagraphElement>(null);
    let rightParagraphRef = useRef<HTMLParagraphElement>(null);

    useGlitch(leftHeadingRef as RefObject<HTMLElement>, 1000);
    useGlitch(leftParagraphRef as RefObject<HTMLElement>, 1000);
    useGlitch(rightParagraphRef as RefObject<HTMLElement>, 1000);

    return (
        <section className="Hero" id="hero">
            <div className="buffer">
            </div>
            <div className="top">
                <div className="top-left">
                    <img src="/src/assets/react.svg"/>
                </div>
                <div className="nav" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className={`menu ${isHovered || isClicked ? "open" : ""}`}>
                        <a className="menuElem" href="#projects">Projects</a>
                        <a className="menuElem" href="#skills-container">Skills</a>
                        <a className="menuElem" href="#aboutMe">AboutMe</a>
                        <a className="menuElem" href="#contact">Contact</a>
                    </div>
                    <div className="top-right" onClick={() => {isClicked? setIsClicked(false):setIsClicked(true)}} >
                        <img src="/menu.svg" />
                    </div>
                </div>
            </div>
            <div className="Middle">
                <div className="left">
                    <h1 ref={leftHeadingRef}>
                        Hi I am Navaneeth.V
                    </h1>
                    <p ref={leftParagraphRef}>
                        I am a college student at IITH pursuing btech in CSE department
                    </p>
                </div>
                <div className="photo">
                    <img src = "/src/assets/hero.png"/>
                </div>
                <div className="right">
                    <p ref={rightParagraphRef}>
                        I develop apps preferably from scratch. I like systems thinking and is eager to learn more about systems. I enjoy devoloping games and is enthusiastic to colaborate with companies
                    </p>
                </div>
            </div>
            <div className="Bottom">

            </div>
        </section>
    )
}

export default Home;