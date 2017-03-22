import React from "react";
import Button from "react-bootstrap/lib/Button";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.setState({
            counter: ++this.state.counter
        })
    }
    render() {
        return (
            <div className="container">
                <Button onClick={this.handleClick} bsStyle="primary">Don't click me {this.state.counter}</Button>
            </div>
        );
    }
}