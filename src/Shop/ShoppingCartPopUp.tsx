import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./ShoppingCartPopUp.css";

interface Props { }

interface State {
    hide : boolean;
}

export default class ShoppingCartPopUp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {hide: true};
        this.hello.bind(this);
    }

    render() {
        return (
            <div className="ShoppingCartPopUpBackground" hidden={this.state.hide} onClick={this.hello}>
                <div className="ShoppingCartPopUp">
                    <div className="CartTitle">Your Shopping Cart</div>
                    <div className="ItemsDiv">
                        <div className="CartItemCont">
                            <div className="CartItemInfo">Pepperoni Pizza</div>
                            <img src="/img/Pizza.png"
                                 className="CartItemIcon"/>
                            <div className="CartItemPrice">$8.99</div>
                            <div style={{top: "3.5vh"}} className="CartItemCancel"/>
                        </div>
                    </div>
                    <div className="FinalPriceText">Final Price</div>
                    <div className="FinalPriceCont"></div>
                    <div className="FinalPrice">$10.34</div>
                    <div style={{left: "65%", width: "30%"}} className="FinalPriceCont"></div>
                    <Link className="CheckOut" to="/sy">
                        <div>Check Out</div>
                    </Link>
                </div>
            </div>
        );
    }

    hello = (e : React.MouseEvent<HTMLDivElement>) => {
        var target = (e.target as Element);
        console.log(target.tagName);
        if (target.className == "ShoppingCartPopUpBackground") {
            this.setState({hide: true});
        }
    }
}