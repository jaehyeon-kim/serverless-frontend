import React from "react";
import { render } from "react-dom";

import { Radio } from "./components/radio";

class App extends React.Component {
    render() {
        return (
            <div>
                <Radio name="radio-group" id="radio1" order="1" label="Credit card"/>
                <Radio name="radio-group" id="radio2" order="2" label="PayPal"/>
                <Radio name="radio-group" id="radio3" order="3" label="Check"/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
