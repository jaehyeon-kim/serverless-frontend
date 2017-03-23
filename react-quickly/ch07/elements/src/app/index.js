import React from "react";
import { render } from "react-dom";

import { Elements } from "./components/elements";

class App extends React.Component {
    render() {
        return (
            <Elements />
        );
    }
}

render(<App />, window.document.getElementById("app"))
