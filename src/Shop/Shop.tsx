import React, {Component, createRef} from 'react';
import {Link} from "react-router-dom";
import NavBar from "../Shared/NavBar";
import AccountInfoPopUp from "../Shared/AccountInfoPopUp";
import "./Shop.css";
import {PopUp} from "../Shared/PopUp";
import Item from "./Item";
import ShoppingCartPopUp from "./ShoppingCartPopUp";
import {Shop} from "../Models/Shop";
let cartRef = createRef<ShoppingCartPopUp>();


interface Props {
    shop : Shop;
}



export default class Shop extends Component<Props> {
    private categories = ['Pizza', 'Pastas', 'Salads', 'Side Dishes', 'Beverages', 'Desserts', 'Appetizers']

    constructor(props: Props) {
        super(props);
        this.categories = this.props.shop.categories;
    }

    render() {
        return (
            <div className="Shop">
                <div className="ShopDetailedInfo">
                    <img style={{height: '50%', width: '11%', top: '11%', left: '3%'}} src={'/img/ShopIcon.png'}/>
                    <div className="ShopDetailsTitle">{this.props.shop.shopName}</div>
                    <div className="ShopDetailsTextLeft">{this.getAddressFromMapbox(this.props.shop.shopLocationLat, this.props.shop.shopLocationLong)} &nbsp;   {this.shop.phoneNumber}
                    </div>
                    <div className="ShopDetailsTextRight">Opening Hours: {this.props.shop.openingHoursWed}</div>
                </div>
                <div className="ShopCategories"
                     style={{flex: 10, flexDirection: "row", justifyContent: 'space-between', padding: '10'}}>
                    {
                        this.categories.map((category, i) => {
                            return (
                                <div className="Category" style={{marginTop: 12 + (i * 30) + '%'}}>{category}</div>);
                        })
                    }
                </div>
                <div style={{height: '50%', width: '11%', top: '57.6%', left: '15%'}}>
                    { this.categories.map((category, i) => {
                    return (
                    <div className="BigCategories">{category}</div>
                    <Item item={item}/> )
                    })
                }
                </div>
                <NavBar/>
                <div className="ShopButtonCont" onClick={showHideCartPopup}>
                    <div className="ShopButtonIcon"/>
                </div>
                <ShoppingCartPopUp ref={cartRef}/>
            </div>
        );
    }

    getAddressFromMapbox(lat: number, long: number) {
        //code contining mapbox api key was here
    }
}

function showHideCartPopup() {
    cartRef?.current?.setState({hide: !cartRef?.current?.state.hide});
}
