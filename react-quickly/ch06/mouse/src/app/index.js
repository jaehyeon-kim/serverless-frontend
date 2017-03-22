import React from "react";
import { render } from "react-dom";

import { SaveButton } from "./components/save";
import { Mouse } from "./components/mouse";
import { Counter } from "./components/counter"

class App extends React.Component {
    render() {
        return (
            <div>
                <SaveButton />
                <Mouse />
                <Counter />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
