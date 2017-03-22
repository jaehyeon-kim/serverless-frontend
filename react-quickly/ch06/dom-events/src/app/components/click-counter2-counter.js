import React from "react";

export class Counter2 extends React.Component {
    render() {
        return(
            <span>Clicked {this.props.value} times.</span>
        );
    }
}