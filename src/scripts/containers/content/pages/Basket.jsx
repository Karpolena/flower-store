
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
                    this.props.basketFlowers.map(basketFlower => {
                        return (                            
                            <CardForBasket 
                            key={basketFlower.id} 
                            basketFlower={basketFlower} 
                            onDelete={(id) => this.props.dispatch(BasketAction.removeFlower(id))}/>
                        )
                    })
                }
                <BasketDisplay value={this.props.basketFlowers.length}/>
            </div>
        )
    }
}

export default connect(store => {
    return {
        basketFlowers: store.basketStore.basketFlowers,
    } 
})(Basket);

Basket.propTypes = {
    basketFlowers: PropTypes.array,
    dispatch: PropTypes.func
}