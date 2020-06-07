import React, {Component, createRef} from 'react';
import {PopUp} from "../Shared/PopUp";
import {Link} from "react-router-dom";
import "./Main.css";
import LogInPopUp from "./LogInPopUp";
import SignUpPopUp from "./SignUpPopUp";
let logInRef = createRef<LogInPopUp>();
let signUpRef = createRef<SignUpPopUp>();
function Main() {
    return (
        <div className="main">
            <div className="background"></div>
            <div className="logo">
                <img src="/img/Asset 1.svg" />
            </div>
            <button className="signInButton" onClick={showHideLoginPopup}>Sign In</button>
            <button className="signUpButton" onClick={showHideSignupPopup}>Sign Up</button>
            <div className="search">
                <input required type="text" maxLength={40} placeholder="Enter Your Address" className="searchInput"/>
                <div className="locationIcon"/>
                <button className="locateButton" onClick={callAskLocation}></button>
            </div>
            <div className="FooterContainer">
                <button className="supportButton">Support</button>
                <div style={{left: "81.3%"}} className="DividerDiv"/>
                <button className="aboutUsButton">About Us</button>
                <div style={{left: "88.5%"}} className="DividerDiv"/>
                <button className="businessOwnersButton">Business Owners</button>
            </div>
            <LogInPopUp ref={logInRef}/>
            <SignUpPopUp ref={signUpRef}/>
        </div>
    );
}



function success(position : Position ) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude + " " + longitude);
}

function showHideLoginPopup() {
    logInRef?.current?.setState({hide: !logInRef?.current?.state.hide});
}

function showHideSignupPopup() {
    signUpRef?.current?.setState({hide: !signUpRef?.current?.state.hide});
}

function callAskLocation() {
    if (navigator.geolocation) {
        let dd = navigator.geolocation.getCurrentPosition(success);
    }
}

export default Main;