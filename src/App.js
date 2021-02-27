import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import {TodoApp} from "./components/TodoApp";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './components/Login'
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
            <TodoApp/>
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
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
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
