import React from "react";

export class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseOverCapture = this.handleMouseOverCapture.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }
    handleMouseOverCapture(event) {
        console.log('mouse over on capture event')
        console.dir(event, this)
    }
    handleMouseOver(event) {
        console.log('mouse over on bubbling event')
        console.dir(event, this)
    }
    render() {
        return (
            <div>
                <div style={{border: '1px solid red'}} onMouseOverCapture={this.handleMouseOverCapture} onMouseOver={this.handleMouseOver}>
                    Open DevTools and move your mouse cursor over here
                </div>
            </div>
        );
    }
}