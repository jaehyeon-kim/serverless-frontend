import React from "react";
import { render } from "react-dom";

import { Menu } from "./components/elements";

class App extends React.Component {
    render() {
        let dataUrl = '../menus.json'
        return (
            <Menu data-url={dataUrl} />
        );
    }
}

render(<App />, window.document.getElementById("app"))
