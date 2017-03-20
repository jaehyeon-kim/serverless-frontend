import React from "react";

import { AnalogDisplay } from "./analog-display";
import { DigitalDisplay } from "./digital-display";

export class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {
            currentTime: (new Date())
        }
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date())
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <AnalogDisplay time={this.state.currentTime} />
                <DigitalDisplay time={this.state.currentTime.toLocaleString()} />
            </div>
        );
    }
}