import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MyCard = ({flower, onAdd}) => {
    return (
        
        <Card className="home__card card">
        <Link to={`/flower/${flower.id}`} >
            <CardMedia>
                <img className="card__photo" src={flower.image}/>
            </CardMedia>
            </Link>
            <CardContent>
                <Typography>
                    <div className="card__title">{flower.title}</div>
                </Typography>
                <Typography component="p">
                    <div className="card__info">
                        <div className="card__price">Price: {flower.price}</div>
                        <div className="card__description">{flower.description}</div>
                    </div> 
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/basket">
                    <Button className="button" onClick={(flower) => onAdd(flower)}> Купить </Button>
                </Link>
                <Button className="button" onClick={(flower) => onAdd(flower)}> Добавить </Button>
            </CardActions>
    </Card>
 
    )
}

MyCard.propTypes = {
    flower: PropTypes.object,
    onAdd: PropTypes.func
}

export default MyCard;

{/* <div>
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
        </div> */}