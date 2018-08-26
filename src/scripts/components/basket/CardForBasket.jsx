import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";

const CardForBasket = ({basketFlower, onDelete}) => {
    return (
        <div className="basket">
            <Link to={`/flower/${basketFlower.id}`} className="home__card card">
                <img className="card__photo" src={basketFlower.image}/>
                <div className="card__info">
                    <div className="card__title">{basketFlower.title}</div>
                    <div className="card__price">Price: {basketFlower.price}</div>
                </div>                
            </Link>
            <div className="button-wrap">
                <Button className="button"> Купить </Button>
                <Button className="button" onClick={() => onDelete(basketFlower.id)}> Удалить </Button>
            </div>
        </div>
    )
}

CardForBasket.propTypes = {
    flower: PropTypes.object,
    onDelete: PropTypes.func,
    basketFlower: PropTypes.object
}

export default CardForBasket;