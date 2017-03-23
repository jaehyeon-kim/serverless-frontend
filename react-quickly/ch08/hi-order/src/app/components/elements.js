import React from "react";

export class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.handleClick}>
                {this.props.label}
            </button>
        );
    }
}

export class Link extends React.Component {
    render() {
        return (
            <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
        );
    }
}

export class Logo extends React.Component {
    render() {
        return (
            <img onClick={this.props.handleClick} width="40" src="https://uploads.toptal.io/blog/category/logo/291/react.png" href="#"/>
        );
    }
}