import React, {Component} from 'react';
import './AccountInfoPopUp.css';

interface Props { }

interface State {
    hide : boolean;
}

export default class AccountInfoPopUp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {hide: true};
        this.hello.bind(this);
    }

    render() {
        return (
            <div className="Account" hidden={this.state.hide} onClick={this.hello}>
                <div className="AccountInfoPopUp" >
                    <div className="SettingsIcon"/>
                    <div className="SettingsText">Settings</div>
                    <div className="HistoryIcon"/>
                    <div className="HistoryText">Order History</div>
                    <div className="SignOutIcon"/>
                    <div className="SignOutText">Sign Out</div>
                </div>
            </div>
        );
    }

    hello = (e : React.MouseEvent<HTMLDivElement>) => {
        var target = (e.target as Element);
        console.log(target.tagName);
        if (target.className == "Account") {
            this.setState({hide: true});
        }
    }
}