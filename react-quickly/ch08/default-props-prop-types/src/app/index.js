import React from "react";
import { render } from "react-dom";

import { Button } from "./components/button";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {counter: 0}
    }
    handleChange(event) {
        this.setState({counter: ++this.state.counter})
        console.log("click button " + this.state.counter)
    }
    render() {
        let number = 1
        return (
            <div>
                <Button buttonLabel={"Start"} title={'abc'} handler={this.handleChange} email={"dottami@gmail.com"} />
                {/*<Button />
                <Button title={number} />
                <Button email="not-a-valid-email" />
                <Button email="dottami@gmail.com" />*/}
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
