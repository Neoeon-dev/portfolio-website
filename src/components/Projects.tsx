import Card from "./Card";
import BigCard from "./BigCard";
import "./Projects.css"
import {useRef, useEffect, useState} from 'react'

interface Props{
    CardsSrc: string[];
    CardsShortData: string[];
    altText: string[];
    heading: string[];
    body: string[];
    githubLink: string[];
    liveLink: string[];
}

function Projects({CardsSrc, CardsShortData, altText, heading, body, githubLink, liveLink} : Props){
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [scales, setScales] = useState<number[]>([]);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const cards = CardsSrc.map((src, index) => ({
        CardsSrc: src,
        CardsShortData: CardsShortData[index]
    }));

    const loopCards = [...cards, ...cards, ...cards]; // Loop the cards three times

    useEffect(() => {
        let ticking = false;

        function updateScales() {
            const container = containerRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.top + containerRect.height / 2;
            const maxDistance = containerRect.height / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            const newScales = cardRefs.current.map((card) => {
                if (!card) return 1;
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.top + cardRect.height / 2;
                const distance = Math.abs(cardCenter - containerCenter);
                const closeness = Math.max(0, 1 - distance / maxDistance);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = cardRefs.current.indexOf(card);
                }

                return 1 + closeness * 0.5; // Scale factor between 1 and 1.5
            });

            setScales(newScales);
            setActiveIndex(closestIndex);
            ticking = false;
        }

        function onScroll() {
            const container = containerRef.current;
            if (!container) return;
            const singleSetHeight = container.scrollHeight / 3;

            if (container.scrollTop < singleSetHeight * 0.5) {
                container.scrollTop += singleSetHeight;
            } else if (container.scrollTop > singleSetHeight * 1.5) {
                container.scrollTop -= singleSetHeight;
            }

            if (!ticking) {
                requestAnimationFrame(updateScales);
                ticking = true;
            }
        }

        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', onScroll);
        updateScales(); // run once on mount

        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    const realIndex = activeIndex % cards.length;

    return (
        <section className="Projects">
            <div className="Projects-left">
                <BigCard imgSrc={CardsSrc[realIndex]} altText={altText[realIndex]} heading={heading[realIndex]} body={body[realIndex]} githubLink={githubLink[realIndex]} liveLink={liveLink[realIndex]}/>
            </div>
            <div className="Projects-right">
                <div className="Cards" ref={containerRef}>
                    {
                        //we need to make the card move in z direction too so that scroll looks good
                        loopCards.map((cardData, index) =>
                            <div key={index} ref={el => { cardRefs.current[index] = el }} style={{ transform: `scale(${scales[index] ?? 1}) translateZ(${(scales[index] ?? 1)*100}px)` }} className="CardWrapper">
                                <Card imgSrc={cardData.CardsSrc} shortData={cardData.CardsShortData}></Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Projects;