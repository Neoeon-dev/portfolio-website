import React, { useRef } from "react";
import "./Planet.css";

interface Props {
    size: number;
    color: string;
    texture?: string;
    // Called with the planet's current on-screen rect when clicked.
    // Omit this prop for non-interactive planets (e.g. moons).
    onSelect?: (rect: DOMRect) => void;
}

function Planet({ size, color, texture, onSelect }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function handleClick(e: React.MouseEvent) {
        if (!onSelect || !ref.current) return;
        e.stopPropagation();
        onSelect(ref.current.getBoundingClientRect());
    }

    return (
        <div
            ref={ref}
            className={`Planet${onSelect ? " Planet--clickable" : ""}`}
            onClick={handleClick}
            style={
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
