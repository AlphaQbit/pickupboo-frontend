import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./LogInPopUp.css";

interface Props { }

interface State {
    hide : boolean;
}

export default class LogInPopUp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {hide: true};
    }

    render() {
        return (
            <div className="LogInPopUpCont" hidden={this.state.hide}>
                <div className="LogInPopUp">
                    <div className="Title">Sign In To Your Account</div>
                    <div style={{top: "30%"}} className="FieldName">Email</div>
                    <div style={{top: "50%"}} className="FieldName">Password</div>
                    <div style={{top: "28%"}} className="InputCont">
                        <input style={{position: "absolute"}} required type="text" maxLength={40}
                               placeholder="12345@gmail.com" className="FieldInput"/>
                    </div>
                    <div style={{top: "48%"}} className="InputCont">
                        <input style={{position: "absolute"}} required type="text" maxLength={40}
                               placeholder="123password" className="FieldInput"/>
                    </div>
                    <div className="Button"></div>
                    <div className="ButtonText">Sign In</div>
                    <div className="CloseButton" onClick={() => this.setState({hide: !this.state.hide})}/>
                </div>
            </div>
        );
    }
}