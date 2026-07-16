import { useEffect, useState } from "react";
import Orbit from "./Orbit";
import Planet from "./Planet";
import type { PlanetData } from "./PlanetarySystem";
import "./PlanetDetail.css";

interface Props {
    planet: PlanetData;
    originRect: DOMRect;
    onClose: () => void;
}

const OPEN_SIZE = 220;
const TRANSITION_MS = 550;

function PlanetDetail({ planet, originRect, onClose }: Props) {
    const [open, setOpen] = useState(false);

    // flip to "open" one frame after mount so the browser animates
    // from the closed (origin) styles instead of snapping straight there
    useEffect(() => {
        const id = requestAnimationFrame(() => setOpen(true));
        return () => cancelAnimationFrame(id);
    }, []);

    function handleClose() {
        setOpen(false);
        setTimeout(onClose, TRANSITION_MS);
    }

    const heroStyle = open
        ? {
              left: "50%",
              top: "50%",
              width: OPEN_SIZE,
              height: OPEN_SIZE
          }
        : {
              left: originRect.left + originRect.width / 2,
              top: originRect.top + originRect.height / 2,
              width: originRect.width,
              height: originRect.height
          };

    return (
        <div
            className={`DetailBackdrop${open ? " DetailBackdrop--visible" : ""}`}
            onClick={handleClose}
        >
            <div
                className="DetailPlanet"
                style={{
                    ...heroStyle,
                    background: planet.color,
                    boxShadow: `0 0 40px ${planet.color}, 0 0 90px ${planet.color}`
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {planet.texture && (
                    <img src={planet.texture} className="DetailPlanetLogo" alt="" />
                )}
            </div>

            {open && (
                <div className="MoonField" onClick={(e) => e.stopPropagation()}>
                    {planet.moons.map((m) => (
                        <Orbit key={m.name} radius={m.distance} speed={m.speed}>
                            <Planet size={m.size} color={m.color} />
                        </Orbit>
                    ))}

                    <div className="DetailInfo">
                        <h2>{planet.name}</h2>
                        <p>{planet.description}</p>
                        <button className="CloseButton" onClick={handleClose}>
                            ← Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlanetDetail;
