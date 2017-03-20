import React from "react";
import { render } from "react-dom";

import { Content } from "./components/content";

class App extends React.Component {
    render() {
        return (
            <Content />
        );
    }
}

render(<App />, window.document.getElementById("app"))
