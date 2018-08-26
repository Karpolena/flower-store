import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            name: "",
            password: ""
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: "",
            password: ""
        })
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }
        
    
    render() {
        return(
            <main className="main-form">
                <form className="form">                
                    <input
                    type="text"
                    placeholder="Имя"
                    value={this.state.name}
                    onChange={this.handleNameChange.bind(this)}
                    className="userName form__item"
                    id="userName"
                    /> 
                                
                    <input
                    type="password"
                    placeholder="пароль"
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this)}
                    className="userPassword form__item"
                    />
                    
                </form>            
                <Button onClick={this.handleSubmit.bind(this)}className="button">Отправить</Button>            
            </main>
        );
    }
}

export default Login;



// Login.propTypes = {
// }

