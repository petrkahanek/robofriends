import React from "react"
import Card from "./Card.js"
// import { robots } from "./robots.js"

const CardList = ({ robots }) => {
    if (true) {
        throw new Error("noooo");
    }
    const cardsArray = robots.map((robot, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList