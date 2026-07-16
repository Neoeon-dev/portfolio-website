import "./BigCard.css";

interface Props{
    imgSrc: string;
    altText: string;
    heading: string;
    body: string;
    githubLink: string;
    liveLink: string;
    tech: string[];
}

function BigCard({imgSrc, altText, heading, body, githubLink, liveLink, tech}: Props){
    return (
        <div className="BigCard">
            <div className="Image_big">
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="Data_big">
                <h3>{heading}</h3>
                <p>{body}</p>
            </div>
            <div className="Tags_big">
                {tech.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <div className="Links_big">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
        </div>
    )
}

export default BigCard;