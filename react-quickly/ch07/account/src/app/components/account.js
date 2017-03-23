import React from "react";

import { Output } from "./output"

export class Account extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            acc: ""
        }
    }
    handleChange(event) {
        this.setState({acc: event.target.value.replace(/[^0-9]/ig, "")})
    }    
    render() {
        return (
            <div>
                <label>
                    Account Number:
                    <input type="text" value={this.state.acc} onChange={this.handleChange} placeholder="123456"/>
                </label>
                <span>{this.state.acc.length > 0 ? <Output acc={this.state.acc} />: ""}</span>
            </div>
        );
    }
}