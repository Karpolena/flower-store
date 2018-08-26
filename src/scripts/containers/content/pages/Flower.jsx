import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as FlowerActions from "./../../../actions/Flowers";
import * as BasketAction from "../../../actions/Basket";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class Flower extends Component {


    componentDidMount() {
        this.fetchFlower(this.props);
    }

    componentWillReceiveProps(props) {
        this.fetchFlower(props);
    }

    fetchFlower = (props) => {
        this.props.dispatch(FlowerActions.getFlowerById(props.match.params.id, props.history));
    }

    render() {
        let {flower} = this.props;
        if(!flower || flower.id.toString() !== this.props.match.params.id) return null;
        return(
            <Card className="page">
                <CardMedia className="page__photo"><img src={flower.image}/></CardMedia>                
                <CardContent className="page__info">
                    <h1>{flower.title}</h1>
                    <h3>price: {flower.price}</h3>
                    <p>{flower.description}</p>
                </CardContent>
                <CardActions>
                <Link to="/basket">
                    <Button className="button" onClick={(flower) => this.props.dispatch(BasketAction.addFlower(flower))}>           Купить 
                    </Button>
                </Link>
                </CardActions>                
            </Card> 
        )
    }
}

Flower.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    flowers: PropTypes.array,
    flower: PropTypes.object,
    dispatch: PropTypes.func,
    onAdd: PropTypes.func
}

export default connect(store => {
    return {
        flowers: store.flowersStore.flowers,
        flower: store.flowersStore.flower
    }
})(Flower);
{/* <div className="page">
                <div className="page__photo">
                    <img src={flower.image} />
                </div>
                <div className="page__info">
                    <h1>{flower.title}</h1>
                    <h3>price: {flower.price}</h3>
                    <p>{flower.description}</p>
                    <Link to="/buy">
                        <button className="button">
                            Купить
                        </button>
                    </Link>
                </div>                
            </div> */}