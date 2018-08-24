
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as BasketAction from "../../../actions/Basket";

import BasketCalc from "../../../components/basket/BasketCalc";
import BasketDisplay from "../../../components/basket/BasketDisplay";
import Card from "./../../../components/Card";

class Basket extends Component {

    render() {
        return (
            <div>
                {
                    this.props.basketFlowers.map(basketFlower => {
                        return <Card key={basketFlower.id} basketFlower={basketFlower}/>
                    })
                }
                
                <BasketCalc label="Удалить" onDelete={(id) => this.props.dispatch(BasketAction.removeFlower(id))}/>
                <BasketDisplay value={this.props.count}/>
            </div>
        )

    }

}

export default connect(store => {
    return {
        basketFlowers: store.basketStore.basketFlowers,
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