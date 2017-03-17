import React from "react";

export class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button 
                            className="btn btn-primary" 
                            onClick={() => this.props.changeUserName('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}

Main.PropTypes = {
    changeUserName: React.PropTypes.func
}