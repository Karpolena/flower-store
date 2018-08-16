import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({flower}) => {
    return (
        <Link to={`/flower/${flower.id}`} className="home__card card">
            <img className="card__photo" src={flower.image}/>
            <div className="card__info">
                <div className="card__title">{flower.title}</div>
                <div className="card__price">Price: {flower.price}</div>
                <div className="card__description">
                    {flower.description} 
                </div>
            </div>                
        </Link>
    )
}

Card.propTypes = {
    flower: PropTypes.object
}

export default Card;