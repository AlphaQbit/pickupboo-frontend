import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./LogInPopUp.css";
import {User} from "../Models/User";

interface Props {
}

interface State {
    hide : boolean;
    username : string;
    password : string;
}

export default class SignUpPopUp extends React.Component<Props, State> {

    handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
        // No longer need to cast to any - hooray for react!
        this.setState({username: e.target.value});
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        // No longer need to cast to any - hooray for react!
        this.setState({password: e.target.value});
    }


    constructor(props : Props) {
        super(props);
        this.state = {hide : true, username : "", password : ""};

        this.handleChangePassword.bind(this);
        this.handleChangeUsername.bind(this);
        this.SignupClick.bind(this);
    }

    SignUpMethod(user : User, Password : string) {
        fetch("http://192.168.1.109:5000/api/users/" + Password, {method: "POST", headers: {'Content-Type': 'application/json', 'Accept': '*/*'}, body: JSON.stringify(user)})
            .then(res => {

                },
                (error) => {
                    console.log(error);
                });
    }

    SignupClick() {
        this.user.userEmail = this.state.username;
        this.user.username = this.state.username;
        this.SignUpMethod(this.user, this.state.password);
    }

    private user: User = {
        userEmail: "", userFirstName: "", userId: "", userLastName: "", userPhoneNumber: "", userType: 0, username: ""
    }

    render() {
        return(
            <div className="LogInPopUpCont" hidden={this.state.hide}>
                <div className="LogInPopUp">
                    <div className="Title">Sign Up For An Account</div>
                    <div style={{top:"30%"}} className="FieldName">Email</div>
                    <div style={{top:"50%"}} className="FieldName">Password</div>
                    <div style={{top:"70%"}} className="FieldName">First Name</div>
                    <div style={{top:"28%"}} className="InputCont">
                        <input style={{position: "absolute"}} onChange={() => this.handleChangeUsername} required type="text" maxLength={40} placeholder="12345@gmail.com" className="FieldInput"/>
                    </div>
                    <div style={{top:"48%"}}className="InputCont">
                        <input style={{position: "absolute"}} onChange={() => this.handleChangePassword} required type="text" maxLength={40} placeholder="12345" className="FieldInput"/>
                    </div>
                    <div style={{top:"68%"}}className="InputCont">
                        <input style={{position: "absolute"}} onChange={() => this.handleChangePassword} required type="text" maxLength={40} placeholder="Jonh" className="FieldInput"/>
                    </div>
                    <div className="Button"></div>
                    <div className="ButtonText" onClick={() =>this.SignupClick()}>Sign Up</div>
                    <div className="CloseButton" onClick={() => this.setState({hide: !this.state.hide})}/>
                </div>
            </div>
        );
    }
}
