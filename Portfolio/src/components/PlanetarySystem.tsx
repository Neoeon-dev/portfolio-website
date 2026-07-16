import { useState } from "react";
import Sun from "./Sun";
import Planet from "./Planet";
import Orbit from "./Orbit";
import PlanetDetail from "./PlanetDetail";
import "./PlanetarySystem.css";
import type React from "react";

export interface MoonData {
    name: string;
    size: number;
    color: string;
    distance: number;
    speed: number;
}

export interface PlanetData {
    id: string;
    name: string;
    size: number;
    color: string;
    texture: string;
    orbitRadius: number;
    angle: number;
    speed: number;
    description: string;
    moons: MoonData[];
}

const planets: PlanetData[] = [
    {
        id: "c",
        name: "C",
        size: 40,
        color: "#283593",
        texture: "/C.svg",
        orbitRadius: 100,
        angle: 0,
        speed: 15,
        description: "Where it started — pointers, memory, and doing things the hard way first.",
        moons: [
            { name: "pointers", size: 10, color: "#5C6BC0", distance: 150, speed: 45 }
        ]
    },
    {
        id: "cpp",
        name: "C++",
        size: 40,
        color: "#283593",
        texture: "/C++.svg",
        orbitRadius: 140,
        angle: 45,
        speed: 30,
        description: "The chess engine's home — move generation, Zobrist hashing, and a lot of debugging.",
        moons: [
            { name: "engine", size: 12, color: "#5C6BC0", distance: 150, speed: 35 },
            { name: "templates", size: 8, color: "#7986CB", distance: 200, speed: 20 }
        ]
    },
    {
        id: "python",
        name: "Python",
        size: 40,
        color: "#37474F",
        texture: "/python.svg",
        orbitRadius: 180,
        angle: 90,
        speed: 20,
        description: "ML from scratch — gradient descent, Gaussian sampling, and preprocessing pipelines.",
        moons: [
            { name: "ml", size: 12, color: "#78909C", distance: 150, speed: 30 },
            { name: "fastapi", size: 8, color: "#90A4AE", distance: 200, speed: 22 }
        ]
    },
    {
        id: "java",
        name: "Java",
        size: 40,
        color: "#3E2723",
        texture: "/java.svg",
        orbitRadius: 220,
        angle: 135,
        speed: 5,
        description: "Coursework and fundamentals.",
        moons: [
            { name: "oop", size: 9, color: "#6D4C41", distance: 150, speed: 28 }
        ]
    },
    {
        id: "mysql",
        name: "MySQL",
        size: 40,
        color: "#ffffff",
        texture: "/mysql.svg",
        orbitRadius: 260,
        angle: 180,
        speed: 5,
        description: "Data behind the projects.",
        moons: [
            { name: "queries", size: 9, color: "#e0e0e0", distance: 150, speed: 26 }
        ]
    },
    {
        id: "web",
        name: "Web Dev",
        size: 40,
        color: "#FDFBD4",
        texture: "/web-development.svg",
        orbitRadius: 300,
        angle: 225,
        speed: 5,
        description: "This site — React, Vite, and a lot of CSS layout experiments.",
        moons: [
            { name: "react", size: 11, color: "#F5F0B0", distance: 150, speed: 32 },
            { name: "css", size: 9, color: "#EFE9A0", distance: 200, speed: 18 }
        ]
    }
];

interface Props{
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanetarySystem({setLoading} : Props){

    const [selected, setSelected] = useState<PlanetData | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);

    function handleSelect(planet: PlanetData, rect: DOMRect) {
        setOriginRect(rect);
        setSelected(planet);
    }

    function handleClose() {
        setSelected(null);
        setOriginRect(null);
    }

    return(
        <div className="PlanetarySystem">
            <div className={`SolarSystem${selected ? " SolarSystem--dimmed" : ""}`}>
                <Sun></Sun>
                {planets.map(p => (
                    <Orbit
                        key={p.id}
                        radius={p.orbitRadius}
                        angle={p.angle}
                        speed={p.speed}
                        setLoading={setLoading}
                        paused={!!selected}
                    >
                        <Planet
                            size={p.size}
                            color={p.color}
                            texture={p.texture}
                            onSelect={(rect) => handleSelect(p, rect)}
                        />
                    </Orbit>
                ))}
            </div>

            {selected && originRect && (
                <PlanetDetail
                    planet={selected}
                    originRect={originRect}
                    onClose={handleClose}
                />
            )}
        </div>
    )
}

export default PlanetarySystem;
