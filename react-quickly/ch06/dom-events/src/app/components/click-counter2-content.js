import React from "react";

import { Counter2 } from "./click-counter2-counter";
import { ClickCounterButton2 } from "./click-counter2-button"

export class ClickCounterContent2 extends React.Component {
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
        return(
            <div>
                <ClickCounterButton2 handler={this.handleClick}/>
                <br/>
                <Counter2 value={this.state.counter}/>
            </div>
        );
    }
}