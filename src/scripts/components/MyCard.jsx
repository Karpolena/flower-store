import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const MyCard = ({flower}) => {
    return (
        <Link to={`/flower/${flower.id}`} >
            <Card className="home__card card">
                <CardMedia>
                    <img className="card__photo" src={flower.image}/>
                </CardMedia>
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
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
        </Card>
      </Link>
    )
}

MyCard.propTypes = {
    flower: PropTypes.object
}

export default MyCard;