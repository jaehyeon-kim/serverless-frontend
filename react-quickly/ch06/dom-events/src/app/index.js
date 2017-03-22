import React from "react";
import { render } from "react-dom";

import { SaveButton } from "./components/save";
import { Mouse } from "./components/mouse";
import { Counter } from "./components/click-counter0"
import { ClickCounterContent } from "./components/click-counter1-content";
import { ClickCounterContent2 } from "./components/click-counter2-content";

class App extends React.Component {
    render() {
        return (
            <div>
                <SaveButton />
                <Mouse />
                <Counter />
                <ClickCounterContent />
                <ClickCounterContent2 />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
