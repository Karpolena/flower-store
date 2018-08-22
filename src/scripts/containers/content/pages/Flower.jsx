import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as FlowerActions from "./../../../actions/Flowers";
import Button from '@material-ui/core/Button';

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
            <div className="page">
                <div className="page__photo">
                    <img src={flower.image} />
                </div>
                <div className="page__info">
                    <h1>{flower.title}</h1>
                    <h3>price: {flower.price}</h3>
                    <p>{flower.description}</p>
                    <Link to="/login">
                        <Button variant="contained" color="primary">
                            Купить
                        </Button>
                    </Link>
                </div>                
            </div>
        )
    }
}

Flower.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    flowers: PropTypes.array,
    flower: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(store => {
    return {
        flowers: store.flowersStore.flowers,
        flower: store.flowersStore.flower
    }
})(Flower);
