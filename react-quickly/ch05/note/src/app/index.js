import React from "react";
import { render } from "react-dom";

import { Note } from "./components/note";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.elapseSec()
        this.state = {
            secondsLeft: 5,
            elapsed: 0
        }
    }
    elapseSec() {
        setInterval(() => {
            this.setState({
                elapsed: this.state.elapsed + 1
            })
        }, 1000)
    }
    render() {
        if (this.state.elapsed <= this.state.secondsLeft)
            return <Note elapsed={this.state.elapsed} />
        return <div>Note was removed after {this.state.secondsLeft} seconds</div>
    }
}

render(<App />, window.document.getElementById("app"))
