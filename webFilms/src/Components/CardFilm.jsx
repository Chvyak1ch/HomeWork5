import React, { useState } from "react";
import { Link } from "react-router-dom";


const CardFilm = (props) => {

    return (
        <div className="cardType">
            <Link to={`/films/${props.id}`}>{props.name}</Link>
            <p>Описание:{props.description} </p>
            <p>Актеры:{props.actors} </p>
            <p>Категория:{props.category} </p>
            <p>Рейтинг:{props.rank} </p>
            <button onClick={props.onClickStar}><img src={props.srcStar} alt={props.altStar} className="toDoButton"/></button>
            <button onClick={props.onClickClock}><img src={props.srcClock} alt={props.altClock} className="toDoButton"/></button>
        </div>
    )
}

export default CardFilm;