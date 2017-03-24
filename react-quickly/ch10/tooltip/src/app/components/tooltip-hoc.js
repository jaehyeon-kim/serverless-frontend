import React from "react";
import ReactDOM from "react-dom";

export const TooltipHOC = (Component) => {
    class _TooltipHOC extends React.Component {
        constructor(props) {
            super(props)
            this.state = {opacity: false}
            this.state.handleToggle = this.handleToggle.bind(this)
            this.state.handleClick = this.handleClick.bind(this)
        }
        updateSetate() {
            const tooltipNode = ReactDOM.findDOMNode(this)
            this.setState({
                opacity: !this.state.opacity,
                top: tooltipNode.offsetTop,
                left: tooltipNode.offsetLeft
            })
        }
        handleToggle() {
            this.updateSetate()
        }
        handleClick(event) {
            this.updateSetate()
        }
        render() {
            return <Component {...this.state} {...this.props} />
        }
    }
    _TooltipHOC.displayName = "EnhancedTooltip"
    return _TooltipHOC
}

export class TooltipContent extends React.Component {
    render() {
        const style = {
            zIndex: (this.props.opacity) ? 1000 : -1000,
            opacity: +this.props.opacity,
            top: (this.props.top || 0) + 20,
            left: (this.props.left || 0) - 30
        }
        return(
            <div style={{display: "inline"}}>
                <span style={{color: "blue"}} onMouseEnter={this.props.handleToggle} onMouseOut={this.props.handleToggle} onClick={this.props.handleClick}>
                    {this.props.children}
                </span>
                <div className="tooltip bottom" style={style} role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">{this.props.text}</div>
                </div>
            </div>
        );
    }
} 