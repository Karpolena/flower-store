import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({flower, onAdd}) => {
    return (
        <div>
            <Link to={`/flower/${flower.id}`} className="home__card card">
                <img className="card__photo" src={flower.image}/>
                <div className="card__info">
                    <div className="card__title">{flower.title}</div>
                    <div className="card__price">Price: {flower.price}</div>
                    <div className="card__description">{flower.description}</div>
                </div>                
            </Link>
            
            <div className="button-wrap">
                <Link to="/basket">
                    <button className="button" onClick={(flower) => onAdd(flower)}> Купить </button>
                </Link>
                <button className="button" onClick={(flower) => onAdd(flower)}> Добавить </button>
                
            </div>
        </div>
    )
}

Card.propTypes = {
    flower: PropTypes.object,
    onAdd: PropTypes.func
}

export default Card;