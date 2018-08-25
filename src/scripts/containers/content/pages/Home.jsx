import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as FlowersAction from "../../../actions/Flowers";
import Card from "./../../../components/Card";
import * as BasketAction from "../../../actions/Basket";

class Home extends Component {

    componentDidMount() {
       this.props.dispatch(FlowersAction.getFlowers());
    }

    render() {
        return (
            <div className="home">
                {
                    this.props.flowers.map(flower => {
                        return <Card key={flower.id} flower={flower} onAdd={(flower) => this.props.dispatch(BasketAction.addFlower(flower))}/>
                    })
                }
            </div>
            
        )
    }
    
}

Home.propTypes = {
    flowers: PropTypes.array,
    dispatch: PropTypes.func
} 

export default connect(store => {
    return {
        flowers: store.flowersStore.flowers
    }
})(Home);
