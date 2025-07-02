type attribute = 'Go again' | 'Dominate'

interface cardProps {
    name: string,
    type: 'Attack' | 'Action' | 'Instant' | 'Block' | 'Attack Reaction' | 'Defense Reaction',
    attributes?: attribute[],
    power?: number,
    block?: number,
    pitch: number,
    cost: number,
    text?: string,
    conditionalEffect?: (card: cardProps) => void;
}

const swiftStrike: cardProps = {
    name: "Swift Strike",
    type: 'Attack',
    attributes: ["Go again"],
    power: 3,
    block: 2,
    pitch: 1,
    cost: 0,
}

const staunchGuard: cardProps = {
    name: "Staunch Guard",
    type: "Block",
    block: 4,
    pitch: 1,
    cost: 0,
}

const feint: cardProps = {
    name: "Feint",
    type: "Attack Reaction",
    block: 2,
    pitch: 1,
    cost: 1,

}

// const parry: cardProps = {
//     name: "Parry",
//     type: "Instant",
//     pitch: 1,
//     cost: 1,
//     text: "Prevent all damage the next attack with cost 1 or less would deal",
//     conditionalEffect: (card: cardProps) => {card.cost <= 1},

//     art: "https://preview.redd.it/unpopular-opinion-golden-parry-is-parry-for-casuals-v0-s6590l0schi91.png?width=1080&crop=smart&auto=webp&s=145a8c3b78affd4c8606ad77b54daee002ebca30"
// }

export { swiftStrike, staunchGuard }
export type { cardProps }