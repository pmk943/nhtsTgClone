import './card.css'
interface CardPropType {
    src: string
    name: string
    number: number
    bgcolor?:string
}


function Card({src, name, number,bgcolor}:CardPropType) {
    return (
        <div className="card__container" style={{backgroundColor:bgcolor}}>
            <img src={src} alt={name} />
            <div>
                <h1>{number}</h1>
                <h6>{name}</h6>
            </div>
        </div>
    )
}

export default Card
