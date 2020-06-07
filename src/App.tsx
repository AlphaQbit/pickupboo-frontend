import React, {createRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {findDOMNode} from "react-dom";
import NavBar from "./Shared/NavBar";
import Routes from "./routes";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Main from "./Main/Main";
import AccountInfoPopUp from "./Shared/AccountInfoPopUp";
import ShopList from "./ShopList/ShopList";
import ShopWindow from "./ShopList/ShopWindow";
import Shop from "./Shop/Shop";
import Payment from "./Payment/Payment";
import BusinessUI from "./BusinessUI/BusinessUI";
import ShoppingCartPopUp from "./Shop/ShoppingCartPopUp";
import LogInPopUp from "./Main/LogInPopUp";
import SignUpPopUp from "./Main/SignUpPopUp";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Main}/>
                <Route path="/st" exact component={ShopList}/>
                <Route path="/se" exact component={AccountInfoPopUp}/>
                <Route path="/sr" exact component={Shop}/>
                <Route path="/sy" exact component={Payment}/>
                <Route path="/businessui" exact component={BusinessUI}/>
                <Route path="/shoppinginfopopUp" exact component={ShoppingCartPopUp}/>
                <Route path="/loginpopup" exact component={LogInPopUp}/>
                <Route path="/signuppopup" exact component={SignUpPopUp}/>
            </div>
        </BrowserRouter>
    );
}


export default App;
