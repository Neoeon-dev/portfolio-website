import "./Card.css"

interface Props{
    imgSrc: string;
    shortData: string;
}

function Card({imgSrc, shortData}: Props){
    return (
        <div className="Card">
            <div className="Image">
                <img src={imgSrc}/>
            </div>
            <div className="Data">
                <p>{shortData}</p>
            </div>
        </div>
    )
}

export default Card;