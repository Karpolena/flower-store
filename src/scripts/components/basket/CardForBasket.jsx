import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardForBasket = ({basketFlower, onDelete}) => {
    return (
        <div>
            <Link to={`/flower/${basketFlower.id}`} className="home__card card">
                <img className="card__photo" src={basketFlower.image}/>
                <div className="card__info">
                    <div className="card__title">{basketFlower.title}</div>
                    <div className="card__price">Price: {basketFlower.price}</div>
                </div>                
            </Link>
            <div className="button-wrap">
                <button className="button"> Купить </button>
                <button className="button" onClick={() => onDelete(basketFlower.id)}> Удалить </button>
            </div>
        </div>
    )
}

CardForBasket.propTypes = {
    flower: PropTypes.object
}

export default CardForBasket;