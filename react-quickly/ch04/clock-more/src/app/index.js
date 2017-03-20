import React from "react";
import { render } from "react-dom";

import { Clock } from "./components/clock";

class App extends React.Component {
    render() {
        return (
            <Clock />
        );
    }
}

render(<App />, window.document.getElementById("app"))
