import type React from "react";
import "./Orbit.css"
import { useState, useEffect, useRef } from "react";

interface Props{
    radius: number;
    children: React.ReactNode;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
    angle?: number;
    speed?: number;
    paused?: boolean;
}

function Orbit({radius, children, setLoading, angle = 0, speed = 30, paused = false} : Props){

    let [currAngle, setCurrAngle] = useState(angle);

    // read inside the rAF loop without re-subscribing the effect every toggle
    const pausedRef = useRef(paused);
    pausedRef.current = paused;

    useEffect(() => {
        let frameId: number;

        function rotate() {
            if (!pausedRef.current) {
                setCurrAngle((Date.now() / 1000 * speed + angle) % 360);
            }
            frameId = requestAnimationFrame(rotate);
        }

        frameId = requestAnimationFrame(rotate);

        setLoading?.(false);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="Orbit" style={
            {
                width: radius * 2,
                height: radius * 2,
                transform: `translate(-50%, -50%) rotate(${currAngle}deg)`
            }
        }>
            {children}
        </div>
    )
}

export default Orbit;
