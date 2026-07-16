import "./Contact.css"
import useGlitch from "../hooks/useGlitch";
import { useRef, type RefObject } from "react";

function Contact(){

    let contactRef = useRef<HTMLHeadingElement>(null);
    let rolesRef = useRef<HTMLHeadingElement>(null);

    useGlitch(contactRef as RefObject<HTMLElement>, 1000);
    useGlitch(rolesRef as RefObject<HTMLElement>, 1000);

    return (
        <section className="ContactContainer" id="contact">
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
            <div className="Content">
                <div className="Roles">
                    <h1 ref={contactRef}>Roles: </h1>
                </div>
                <div className="Contact">
                    <h1 ref={rolesRef}>Contact: </h1>
                    <div className="logos">
                        <a className="logo">
                            <img src="/instagram.svg"></img>
                        </a>
                        <a className="logo">
                            <img src="/linkedin.svg"></img>
                        </a>
                        <a className="logo">
                            <img src="/github.svg"></img>
                        </a>
                        <a className="logo">
                            <img src="/gmail.svg"></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;