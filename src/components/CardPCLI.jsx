export default function CardPCLI({title, description}){
    return (
        <div className="cardPCLI">
            <div>
                <img src="/assets/check.png" alt="check icon"/>
            </div>
            <h2 className="font-bold mt-2">{title}</h2>
            <div className="textDescription">
                {description}
            </div>
        </div>
    )
}