import React from "react";
import { render } from "react-dom";

import { Content } from "./components/content";

class App extends React.Component {
    render() {
        return (
            <div>
                <Content>
                    <h1>React</h1>
                    <p>rocks</p>
                </Content>
                <hr/>
                <Content>
                    <p>Bernie Kim</p>
                    <a href="http://jaehyeon-kim.github.io/" target="_blank">Bernie's blog</a>
                </Content>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
