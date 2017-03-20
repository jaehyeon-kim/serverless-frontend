import React from "react";
import { render } from "react-dom";

import { Clock } from "./components/Clock";
import { Stateless } from "./components/Stateless";

class App extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <Stateless id={"ember.js"} frameworkName={"Ember.js"} title={"A framework"} />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
