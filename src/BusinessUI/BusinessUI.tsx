import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./BusinessUI.css";
import NavBar from "../Shared/NavBar";

function BusinessUI() {
    return (
        <div className="BusinessUI">
            <div className="BusinessConfig">
                <div className="ItemsContainer">
                    <div className="IndivCategoryContainer">
                        <p className="CategoryText">Pizzas</p>
                        <div style={{left: "95%"}} className="AddIcon"/>
                    </div>l
                    <div className="ItemIcon"/>
                    <div className="ItemDetails">Pepperoni Pizza - $10.90</div>
                    <div className="TuningIcon"/>
                    <div className="CancelIcon"/>
                    <p className="AmountText">Unlimited</p>
                </div>
                <div className="CategoriesListContainer">
                    <div style={{height: "12%"}} className="IndivCategoryContainer">
                        <p style={{top: "-20%" , left: "5%"}} className="CategoryText">Categories</p>
                    </div>
                    <div className="AddIcon"/>
                    <p className="CategoryFromList">Pizzas</p>
                </div>
            </div>
            <NavBar/>
        </div>
    );
}

export default BusinessUI;