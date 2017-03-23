import React from "react";

export class Output extends React.Component {
    render() {
        return(
            <p>You entered: {this.props.acc}</p>
        );
    }
}