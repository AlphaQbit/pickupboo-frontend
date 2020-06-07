import React, {Component} from 'react';
import './ShopWindow.css';
import {Link} from "react-router-dom";
import {Shop} from "../Models/Shop";

interface Props {
    shop : Shop;
}


export default class ShopWindow extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    private isOpen: boolean = true;

    render() {
        return (
            <Link to="/sr">
                <div className="ShopWindow">
                    <img className="ShopIcon" src={"/img" + this.props.shop.shopId}/>
                    <div className="ShopName">{this.props.shop.shopName}</div>
                    <div className="ShopInfo">{this.props.shop.shopCategory == 1 ? "Restaurant" : "Grocery"}
                        <br/>{this.props.shop.shopLocationLat + this.props.shop.shopLocationLong}
                        <br/>"{this.props.shop.shopSlogan}" <br/>Currently &nbsp;<span
                            style={{color: this.isOpen ? "#00FF11" : "#FF0000"}}>{this.isOpen ? "Open" : "Closed"}</span>
                    </div>
                </div>
            </Link>
        );
    }

    getAddressFromMapbox(lat: number, long: number) {
        //code contining mapbox api key was here
    }
}
