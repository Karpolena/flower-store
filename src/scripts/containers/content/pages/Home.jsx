import React, {Component} from "react";
import {getFlowers} from "./../../../api/flower";
import Card from "./../../../components/Card";


class Home extends Component {

    state = {
        flowers: []
    }

    componentDidMount() {
        getFlowers().then(flowers => {
            this.setState({flowers});
        })
    }

    render() {
        return (
            <div className="home">
                {
                    this.state.flowers.map(flower => {
                        return <Card key={flower.id} flower={flower}/>
                    })
                }
            </div>
        )
    }
}

export default Home;