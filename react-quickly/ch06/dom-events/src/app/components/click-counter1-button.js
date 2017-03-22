import React from "react";
import Button from "react-bootstrap/lib/Button";

export class ClickCounterButton extends React.Component {
    render() {
        return (
            <Button onClick={this.props.handler} bsStyle="danger">
                Increase Volume (Current volume is {this.props.counter})
            </Button>
        );
    }
}