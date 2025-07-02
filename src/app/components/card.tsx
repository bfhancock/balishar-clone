import { cardProps } from "../cards/cards"

const Card = ({ card }: {card: cardProps}) => {
    return(
        <div className="max-w-[300px] max-h-[450px] w-full h-full rounded-2xl border-8 border-black flex flex-col p-2.5 items-center bg-amber-50">
            <div className="w-full flex items-center">
                <div className="text-base rounded-full bg-white border-2 border-black size-8 min-w-[32px] flex flex-col items-center justify-center">
                    <div className="w-full flex justify-center items-center gap-[1px]">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-black bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full border-2 border-black bg-black" />
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-black bg-black" />
                </div>
                <div className="w-full flex flex-col items-center justify-start">
                <span className="h-0.5 rounded-2xl bg-red-500 w-full" />
                <p className="mt-0.5 text-black">{card.name}</p>
                </div>
                <div className="text-base rounded-full bg-red-400 text-black font-black size-8 flex items-center justify-center min-w-[32px]">
                    <p className="border-2 rounded-full border-black w-4/5 h-4/5 text-center">{card.cost}</p>
                </div>
            </div>
            <div className="w-full border-2 border-black mt-2.5">
            </div>
            <div className="w-full min-h-1/3 h-full border-2 border-black mt-[5px] p-2.5">
                <div className="w-full flex justify-center text-black">
                    {card.attributes?.map((attr) => {
                        return(
                            <p>{attr}</p>
                        )
                    })}
                </div>
                <div className="text-black">
                    {card.text}
                </div>
            </div>
            <div className="w-full flex items-center mt-2.5">
                <div className="text-base rounded-full bg-neutral-700 text-white size-8 min-w-[32px] flex items-center justify-center">
                {card.power}
                </div>
                <div className="w-full flex flex-col items-center justify-start text-black">
                <p className="mt-0.5">{card.type}</p>
                </div>
                <div className="text-base rounded-full bg-neutral-700 text-white size-8 flex items-center justify-center min-w-[32px]">
                    {card.block}
                </div>
            </div>
        </div>
    )
}

export default Card