import React, {Component, createRef} from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";
import AccountInfoPopUp from "./AccountInfoPopUp";

let accountInfoRef = createRef<AccountInfoPopUp>();
function NavBar() {
    return (
        <div className="NavCont">
            <Link to="/">
                <div className="SmallLogo">
                    <img style={{width:'10vw', height:'100%'}} src="/img/Asset 2.svg" />
                </div>
            </Link>
            <div onClick={showHideAccountInfoPopup}>
                <div className="UserName">SEAN</div>
                <div className="AccountIcon"/>
            </div>
            <AccountInfoPopUp ref={accountInfoRef}/>
        </div>
    );
}

function showHideAccountInfoPopup() {
    accountInfoRef?.current?.setState({hide: !accountInfoRef?.current?.state.hide});
}

export default NavBar;