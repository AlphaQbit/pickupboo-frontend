import React, {Component} from 'react';
import './Item.css';
import {Link} from "react-router-dom";
import {ShopItem} from "../Models/Shop";
interface Props {
    item : ShopItem;
}

export default class Item extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="Item">
                <div className="ItemIconn"/>
                <div className="ItemName">{this.props.item.itemName}</div>
                <div className="ItemDescription">{this.props.item.itemDescription}</div>
                <div className="ItemPrice">${this.props.item.itemPrice}</div>
            </div>
        );
    }
}