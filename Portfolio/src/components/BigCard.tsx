import "./BigCard.css";

interface Props{
    imgSrc: string;
    altText: string;
    heading: string;
    body: string;
    githubLink: string;
    liveLink: string;
}

function BigCard({imgSrc, altText, heading, body, githubLink, liveLink}: Props){
    return (
        <div className="BigCard">
            <div className="Image">
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="Data">
                <h3>{heading}</h3>
                <p>{body}</p>
            </div>
            <div className="Links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
        </div>
    )
}

export default BigCard;