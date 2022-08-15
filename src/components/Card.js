import React from "react";

import '../styles/card-styles.css'

const Card = ({ cardData, updateScores }) => {
    const {id, title, url} = cardData;
    return (
        <div className="card-item" onClick={() => updateScores(id)}>
            <img src={url} alt={title}/>
            <h2>{title}</h2>
        </div>
    )
}

export default Card;