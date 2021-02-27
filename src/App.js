import React, {Component} from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login'
import PersistentDrawerLeft from './components/drawer'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false   
        };
        this.handleIsLogin = this.handleIsLogin.bind(this);
    }

    handleIsLogin() {
        this.setState({
            isLoggedIn: true
        });
    }
    render() {
        
        const LoginView = () => (
            <Login Login={this.handleIsLogin}/>
        );
        const TodoAppView = () => (
            <div>
                <PersistentDrawerLeft />
            </div>
        );

        var redirect;
        if(this.state.isLoggedIn === false){
            redirect = <Redirect to={"/"} />;
        }else{
            redirect = <Redirect to={"/todo"} />
        }
        return (
            <Router>
                <div className="App">
                    <br/>
                    <br/>
                    <div>
                        {redirect}
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
