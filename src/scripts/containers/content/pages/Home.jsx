import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import * as FlowersAction from "../../../actions/Flowers";
// import {getFlowers} from "./../../../api/flower";
import Card from "./../../../components/Card";


class Home extends Component ({flowersStore}) {

    // state = {
    //     flowers: []
    // }

    // componentDidMount() {
    //     getFlowers().then(flowers => {
    //         this.setState({flowers});
    //     })
    // }

    render() {
        return (
            <div className="home">
                {
                    flowersStore.flowers.map(flower => {
                        return <Card key={flower.id} flower={flower}/>
                    })
                }
            </div>
        )
    }
}
Home.propTypes = {
    flowersStore: PropTypes.object,
    dispatch: PropTypes.func
} 

export default connect(store => {
    return {
        flowersStore: store.flowersStore
    }
})(Home);
