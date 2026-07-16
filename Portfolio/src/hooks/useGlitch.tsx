import type React from "react";
import { useEffect, useRef } from "react";

function randomGlitchChar(char: string){
    if(char.length !== 1) return ' ';
    else{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
        return chars[Math.floor(Math.random()*chars.length)];
    }
}

function buildString(progress: number, text: string){
    const revealed = Math.floor(progress * text.length);
    let final = ""
    for (let i: number = 0; i < text.length; i++){
        if(text[i] == " "){
            final += text[i];
            continue;
        }
        if(i < revealed){
            final += text[i];
        }
        else{
            final += randomGlitchChar(text[i]);
        }
    }
    return final;
}

export default function useGlitch<T extends HTMLElement>(
    ref: React.RefObject<T>,
    duration: number
){

    const playing = useRef(false);

    useEffect(() =>{

        let element = ref.current;

        if(!element) return;

        const text = element.textContent ?? "";

        function startGlitchAnimation(){

            const startTime = performance.now();

            function animate(currentTime: number){

                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed/duration, 1);

                element.textContent = buildString(progress, text);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.textContent = text;
                    playing.current = false;
                }
            }

            requestAnimationFrame(animate);

        }

        const observer = new IntersectionObserver((entries) =>{
            if(entries[0].isIntersecting){
                if(!playing.current){
                    playing.current = true;
                    startGlitchAnimation();
                }
            }
        });
        
        observer.observe(ref.current!);

        return () => observer.disconnect();

    }, []);
}