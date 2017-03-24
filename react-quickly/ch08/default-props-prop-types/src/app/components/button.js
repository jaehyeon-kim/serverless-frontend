import React from "react";

export class Button extends React.Component{
    render() {
        return(
            <button className="btn" title={this.props.title} onClick={this.props.handler}>{this.props.buttonLabel}</button>
        );
    }
}

Button.defaultProps = {buttonLabel: "Submit"}
Button.propTypes = {
    handler: React.PropTypes.func.isRequired,
    title: React.PropTypes.string,
    email(props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (!emailRegularExpression.test(props[propName])) {
            return new Error('Email validation failed!')
        }
    }
}