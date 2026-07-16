import "./Card.css"

interface Props{
    imgSrc: string;
    shortData: string;
    title?: string;
}

function Card({imgSrc, shortData, title}: Props){
    return (
        <div className="Card">
            <div className="Image">
                <img src={imgSrc}/>
            </div>
            <div className="Data">
                <h3>{title}</h3>
                <p>{shortData}</p>
            </div>
        </div>
    )
    
}

export default Card;