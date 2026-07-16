import React from "react";
import Record from "react";
import "./Planet.css"

interface Props{
    size: number;
    color: string;
    texture?: string;
}

function Planet({size, color, texture} : Props){
    return (
        <div className="Planet" style={
            {
                "--size": `${size}px`,
                "--color": color,
                "--glow": color
            } as React.CSSProperties & Record<`--${string}`, string>
        }
        >
            {texture && (
                <img
                    src={texture}
                    className="PlanetLogo"
                    alt=""
                />
            )}
        </div>
    );
}

export default Planet;