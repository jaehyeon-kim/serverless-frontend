import React from "react";
import { render } from "react-dom";

import { TimerWrapper } from "./components/elements";

class App extends React.Component {
    render() {
        return (
            <TimerWrapper />
        );
    }
}

render(<App />, window.document.getElementById("app"))
