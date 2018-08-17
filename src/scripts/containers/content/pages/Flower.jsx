import React, {Component} from "react";
import PropTypes from "prop-types";
import {getFlowerById} from "./../../../api/flower";
import { Link } from "react-router-dom";

class Flower extends Component {

    state = {
        flower: null
    }

    componentDidMount() {
        this.fetchFlower(this.props)
    }

    componentWillReceiveProps(props) {
        this.fetchFlower(props);
    }

    fetchFlower = (props) => {
        getFlowerById(props.match.params.id).then(flower => {
            this.setState({flower});
        }).catch(err => {
            console.log(err);
            props.history.push("/not-found")
        })
    }

    render() {
        let {flower} = this.state;
        if(!flower) return null;
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
                        <button className="button">Купить</button>
                    </Link>
                </div>                
            </div>
        )
    }
}

Flower.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
}

export default Flower;