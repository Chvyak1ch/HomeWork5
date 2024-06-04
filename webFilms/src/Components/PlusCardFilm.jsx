import React, { useState } from "react";
import { Link } from "react-router-dom";


const PlusCardFilm = (props) => {

    return (
        <div className="cardType">
            <Link to={`/films/${props.id}`}>{props.name}</Link>
            <p>Описание:{props.description} </p>
            <p>Актеры:{props.actors} </p>
            <p>Категория:{props.category} </p>
            <p>Рейтинг:{props.rank} </p>
        </div>
    )
}

export default PlusCardFilm;