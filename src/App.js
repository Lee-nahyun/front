import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home.js';
import Test from './test.js';
import Login from './login.js';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return(
            <div className='App'>
                <BrowserRouter>
                    <Route path="/" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/login" component={Login} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
