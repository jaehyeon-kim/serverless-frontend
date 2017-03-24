import React from "react";
import { render } from "react-dom";

import { Tooltip } from "./components/tooltip";
import { TooltipHOC, TooltipContent } from "./components/tooltip-hoc"

const EnhancedTooltip = TooltipHOC(TooltipContent)

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Tooltip Widget - mouse over only</h1>
                    <Tooltip text="The book you're reading now">React Quickly</Tooltip> was published in <Tooltip text="publish year">2017</Tooltip>.                
                </div>
                <div className="row">
                    <h1>Tooltip Widget - mouse over and click </h1>
                    <EnhancedTooltip text="The book you're reading now">React Quickly</EnhancedTooltip> was published in <EnhancedTooltip text="publish year">2017</EnhancedTooltip>.                     
                </div>
            </div>
            
        );
    }
}

render(<App />, window.document.getElementById("app"))
