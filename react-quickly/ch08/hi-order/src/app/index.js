import React from "react";
import { render } from "react-dom";

import { LoadWebsite } from "./components/load-website";
import { Button, Link, Logo } from "./components/elements";

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class App extends React.Component {
    render() {
        return (
            <div>
                <EnhancedButton />
                <br />
                <br />
                <EnhancedLink />
                <br />
                <br />
                <EnhancedLogo />
                <br />
                <br />
                <iframe id="frame" src="" width="600" height="500" />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"))
