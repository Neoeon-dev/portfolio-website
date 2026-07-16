import "./AboutMe.css"
import useGlitch from "../hooks/useGlitch";
import { useRef, type RefObject } from "react";

function AboutMe(){

    let briefParagraph = useRef<HTMLParagraphElement>(null);
    let experienceParagraph = useRef<HTMLParagraphElement>(null);
    let experienceHeading = useRef<HTMLHeadingElement>(null);

    useGlitch(briefParagraph as RefObject<HTMLElement>, 2000);
    useGlitch(experienceParagraph as RefObject<HTMLElement>, 2000);
    useGlitch(experienceHeading as RefObject<HTMLElement>, 2000);
    
    return (
        <section className="AboutMePage" id="aboutMe">
            <svg
                className="border"
                viewBox="0 0 1200 700"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3d8fff"/>
                        <stop offset="50%" stopColor="#66e6ff"/>
                        <stop offset="100%" stopColor="#3d8fff"/>
                    </linearGradient>
                </defs>

                <path
                    d="M40 80 L70 50 L1130 50 L1160 80 L1160 620 L1130 650 L70 650 L40 620 Z"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                />

                <path
                    d="M60 95 L85 70 L1115 70 L1140 95 L1140 605 L1115 630 L85 630 L60 605 Z"
                    fill="none"
                    stroke="#2d7fff"
                    strokeOpacity="0.25"
                    strokeWidth="1"
                />

                <line x1="480" y1="50" x2="720" y2="50" stroke="#7ffcff" strokeWidth="2" filter="url(#glow)"/>
                <line x1="480" y1="650" x2="720" y2="650" stroke="#7ffcff" strokeWidth="2" filter="url(#glow)"/>

                <polygon points="600,45 606,50 600,55 594,50" fill="#8ffcff" filter="url(#glow)"/>
                <polygon points="600,645 606,650 600,655 594,650" fill="#8ffcff" filter="url(#glow)"/>

                <circle cx="40" cy="350" r="4" fill="#6ffcff" filter="url(#glow)"/>
                <circle cx="1160" cy="350" r="4" fill="#6ffcff" filter="url(#glow)"/>
            </svg>

            <div className="AboutMe">
                <div className="Brief">
                    <p ref={briefParagraph}>
                        I'm a Computer Science undergraduate at IIT Hyderabad with a passion for building software that combines thoughtful engineering with engaging user experiences. I enjoy taking ideas from concept to completion, whether it's designing interactive web applications, developing low-level systems, or exploring artificial intelligence.
                        <br/><br/>
                        I believe the best way to learn is by building. Every project I work on is an opportunity to understand how things work beneath the surface, improve my problem-solving skills, and create something I'm genuinely proud of.
                        <br/><br/>
                        Outside of development, I enjoy competitive programming, playing chess, and constantly exploring new technologies that challenge me to grow as an engineer.
                    </p>
                </div>
                <div className="Experience">
                    <h1 ref={experienceHeading}>Experience: </h1>
                    <br/>
                    <p ref={experienceParagraph}>
                        I have experience in full-stack web development, having built several projects using technologies like React, Node.js. I've also worked on low-level programming and systems design, gaining proficiency in C/C++ and understanding operating system concepts.
                        <br/><br/>
                        Additionally, I've explored machine learning and AI, implementing models for various applications and participating in related competitions. My diverse experience allows me to approach problems from multiple angles and find innovative solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;