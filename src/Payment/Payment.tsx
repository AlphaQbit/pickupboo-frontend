import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Payment.css";
import NavBar from "../Shared/NavBar";

function Payment() {
    return (
        <div className="Payment">
            <div className="Header">Payment</div>
            <div className="SubHeader">Choose payment method below</div>
            <div style={{left: '22.6%'}} className="PaymentMethodDiv"/>
            <div style={{left: '42.8%'}} className="PaymentMethodDiv"/>
            <div style={{left: '63%'}} className="PaymentMethodDiv"/>
            <div className="PaymentMethodIconVisa"/>
            <div className="PaymentMethodIconMasterCard"/>
            <div className="PaymentMethodIconAmericanExpress"/>
            <div style={{left: '27%'}} className="InfoHeader">Billing Info</div>
            <div style={{left: '50%'}} className="InfoHeader">Credit Card Info</div>
            <div style={{left: '25%',top: '53%'}} className="InfoSubHeader">Full Name</div>
            <div style={{left: '50%',top: '53%'}} className="InfoSubHeader">Card Number</div>
            <div style={{left: '25%',top: '55%', width:'18%'}} className="InputDiv">
                <input required type="text" maxLength={40} placeholder="John Doe" className="InputField"/>
            </div>
            <div style={{left: '50%',top: '55%', width:'18%'}} className="InputDiv">
                <input required type="text" maxLength={40} placeholder="1234 5678 3456 2456" className="InputField"/>
            </div>
            <div style={{left: '25%',top: '63%'}} className="InfoSubHeader">Address</div>
            <div style={{left: '50%',top: '63%'}} className="InfoSubHeader">CardHolder Name</div>
            <div style={{left: '25%',top: '65%', width:'18%'}} className="InputDiv">
                <input required type="text" maxLength={40} placeholder="497 Evergreen Rd." className="InputField"/>
            </div>
            <div style={{left: '50%',top: '65%', width:'18%'}} className="InputDiv">
                <input required type="text" maxLength={40} placeholder="John Doe" className="InputField"/>
            </div>
            <div style={{left: '25%',top: '73%'}} className="InfoSubHeader">City</div>
            <div style={{left: '34%',top: '73%'}} className="InfoSubHeader">Zip Code</div>
            <div style={{left: '50%',top: '73%'}} className="InfoSubHeader">Expiry Date(MM / YY)</div>
            <div style={{left: '25%',top: '75%', width:'8%'}} className="InputDiv">
                <input required type="text" maxLength={20} placeholder="Roseville" className="InputField"/>
            </div>
            <div style={{left: '34%',top: '75%', width:'8%'}} className="InputDiv">
                <input required type="text" maxLength={6} placeholder="95673" className="InputField"/>
            </div>
            <div style={{left: '50%',top: '75%', width:'18%'}} className="InputDiv">
                <input required type="text" maxLength={5} placeholder="05/22" className="InputField"/>
            </div>
            <button className="PayButton">Pay Now</button>
            <NavBar/>
            <div className="FooterContainer">
                <button className="supportButton">Support</button>
                <div style={{left: "81.3%"}} className="DividerDiv"/>
                <button className="aboutUsButton">About Us</button>
                <div style={{left: "88.5%"}} className="DividerDiv"/>
                <button className="businessOwnersButton">Business Owners</button>
            </div>
        </div>
    );
}
export default Payment;