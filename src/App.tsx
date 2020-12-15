import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from "./components/Products/Products";
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default App;
