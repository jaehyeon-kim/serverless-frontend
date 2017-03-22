import React from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

export class ClickCounterButton2 extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                <Button onClick={this.props.handler} bsStyle="info">
                    Dont touch me with your dirty hands!
                </Button>
            </ButtonToolbar>
        );
    }
}