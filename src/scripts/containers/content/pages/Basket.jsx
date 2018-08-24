
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as BasketAction from "../../../actions/Basket";
import BasketDisplay from "../../../components/basket/BasketDisplay";
import CardForBasket from "./../../../components/basket/CardForBasket";

class Basket extends Component {

    render() {
        return (
            <div>
                   {
                    this.props.basketFlowers.map(_basketFlower => {
                        return (                            
                            <CardForBasket 
                            key={_basketFlower.id} 
                            basketFlower={_basketFlower} 
                            onDelete={(id) => this.props.dispatch(BasketAction.removeFlower(id))}/>
                        )
                    })
                }
                <BasketDisplay value={this.props.count}/>
            </div>
        )
    }
}

export default connect(store => {
    return {
        basketFlowers: store.basketStore.basketFlowers,
        basketFlower: store.basketStore.basketFlower,
        count: store.basketStore.count,
        basketFlowerId: store.basketFlowerId
    } 
})(Basket);

Basket.propTypes = {
    basketFlowers: PropTypes.array,
    count: PropTypes.number,
    basketFlowerId: PropTypes.array,
    dispatch: PropTypes.func
}