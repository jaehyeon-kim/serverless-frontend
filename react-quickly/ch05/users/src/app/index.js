import React from "react";
import { render } from "react-dom";

import { Users } from "./components/users";

class App extends React.Component {
    render() {
        let dataUrl = '../real-user-data.json'
        return (
            <Users data-url={dataUrl}/>
        );
    }
}

render(<App />, window.document.getElementById("app"))
