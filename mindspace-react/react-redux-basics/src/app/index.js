/*import React from "react";
import { render } from "react-dom";

import { User } from "./components/User";
import { Main } from "./components/Main";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Bernie"
        };
    }

    changeUserName(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUserName={this.changeUserName.bind(this)} />
                <User username={this.state.username} />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))*/

import { createStore } from "redux";

// 1. define store and tell it who is responsible to change state (reducer)
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload
            break;
        case "SUBSTRACT":
            state = state - action.payload
            break;
    }
    return state;
}

const store = createStore(reducer, 1);

// 3. subscribe
store.subscribe(() => {
    console.log("State updated!", store.getState())
});

// 2. dispatch actions
store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 80
});



