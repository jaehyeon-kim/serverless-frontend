import React from "react";

import { ClickCounterButton } from "./click-counter1-button";

export class ClickCounterContent extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            counter: 0
        }
    }
    handleClick(event) {
        this.setState({
            counter: ++this.state.counter
        })
    }
    render() {
        return (
            <div className="container">
                <ClickCounterButton counter={this.state.counter} handler={this.handleClick}/>
            </div>
        );
    }
}