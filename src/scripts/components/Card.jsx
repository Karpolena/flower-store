import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({flower}) => {
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
                <button className="button"> Купить </button>
                <button className="button"> Избранное </button>
            </div>
        </div>
    )
}

Card.propTypes = {
    flower: PropTypes.object
}

export default Card;