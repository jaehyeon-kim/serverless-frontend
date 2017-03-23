import React from "react";
import { render } from "react-dom";

import { Account } from "./components/account";

class App extends React.Component {
    render() {
        return (
            <Account />
        );
    }
}

render(<App />, window.document.getElementById("app"))
