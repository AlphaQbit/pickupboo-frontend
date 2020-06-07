import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavBar from "../Shared/NavBar";
import AccountInfoPopUp from "../Shared/AccountInfoPopUp";
import "./ShopList.css";
import ShopWindow from "./ShopWindow";
import {Shop} from "../Models/Shop";

    export default class ShopList extends Component
    {
        public shops : Shop[] = [];
        GetShops(location : string, limit : number) {
            fetch("http://192.168.1.109:5000/api/shops/" + location + "/" + limit)
                .then(res => {
                    if (!res.ok) {
                        throw Error();
                    }
                    return res.json() as Promise<Shop[]>
                })
                .then(
                    (result) => {
                        this.shops = result;
                        console.log(result[0].shopName);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        console.log(error);
                    })
        }
        componentDidMount() {
            this.GetShops("-79.757424,43.428572", 10);
        }

        render () {
            return (
                <div className="ShopList">
                    <div className="SorterBlock">
                        <p style={{left: '1vh'}} className="SorterTitlesText">Category</p>
                        <div className="RestaurantIcon"/>
                        <p style={{top: '5.1vh', left: '4vh'}} className="SorterCategoriesText">Restaurant</p>
                        <div className="ClothingIcon"/>
                        <p style={{top: '9.4vh', left: '4vh'}} className="SorterCategoriesText">Clothing</p>
                        <div className="GroceryIcon"/>
                        <p style={{top: '13.4vh', left: '4vh'}} className="SorterCategoriesText">Grocery</p>
                        <p style={{top: '18.4vh', left: '1vh'}} className="SorterTitlesText">Distance</p>
                        <select style={{top: '24vh', left: '1vh'}} id="my-select">
                            <option value="">1 km</option>
                            <option value="1">10 km</option>
                            <option value="2">30 km</option>
                            <option value="3">50 km</option>
                        </select>
                    </div>
                    { this.shops.map((value, index) => {
                        return (
                            <ShopWindow shop={value}/>
                        )
                    })}
                    <NavBar/>
                    <div className="SearchBar">
                        <input required type="text" maxLength={40} placeholder="Search For a Store or Restaurant" className="SearchInput"/>
                        <div className="SearchIcon"/>
                    </div>

                </div>
            );
        }
    }