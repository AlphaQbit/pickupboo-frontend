import React, { Component } from 'react';


export class PopUp extends Component {
    show : boolean | undefined;
    render() {
        return (
            <div className={this.show ? "popUpBackground" : "hidden"}>
                <div className="popupBox">
                    <div className="closeButton" />
                </div>
            </div>
        );
    }
}