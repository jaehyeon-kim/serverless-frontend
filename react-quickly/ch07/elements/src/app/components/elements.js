import React from "react";

export class Elements extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleRadio2 = this.handleRadio2.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleTextarea = this.handleTextarea.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.state = {
            radioGroup: {angular: false, react: true, polymer: false},
            radioGroup2: {angular: false, react: true, polymer: false},
            checkboxGroup: {node: false, react: true, express: false, mongodb: false},
            description: "",
            selectedValue: "node",
            email: ""
        }
    }
    handleChange(event) {
        console.log(event.target.value)
    }
    handleEmailChange(event) {
        console.log("input\n")
        console.dir(event.target.value)
        this.setState({email: event.target.value})
    }
    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true
        console.log("radio\n")
        console.dir(obj)
        this.setState({radioGroup: obj})
    }
    handleRadio2(event) {
        let obj = this.state.radioGroup2
        let obj_up = Object.keys(obj).reduce((result, item) => {
            result[item] = item === event.target.value
            return result;
        },{})
        console.log("radio2\n")
        console.dir(obj_up)
        this.setState({radioGroup2: obj_up})
    }
    handleCheckbox(event) {
        let obj = this.state.checkboxGroup
        obj[event.target.value] = event.target.checked // true or false
        console.log("checkbox\n")
        console.dir(obj)
        this.setState({checkboxGroup: obj})
    }
    handleTextarea(event) {
        console.log("textarea\n")
        console.dir(event.target.value)
        this.setState({description: event.target.value})
    }
    handleSelectChange(event) {
        console.log("select\n")
        console.dir(event.target.value)
        this.setState({selectedValue: event.target.value})
    }
    render() {
        return(
            <div className="container">
                <form>
                    <h2>input: input</h2>
                    <label>
                        Email
                        <input type="text" onChange={this.handleChange} defaultValue="dottami@gmail.com"/>
                    </label>
                    <br/>
                    <h2>input: radio</h2>
                    <label>
                        Angular
                        <input type="radio" name="radioGroup" value="angular" checked={this.state.radioGroup["angular"]} onChange={this.handleRadio} />                        
                    </label>                
                    <label>
                        React
                        <input type="radio" name="radioGroup" value="react" checked={this.state.radioGroup["react"]} onChange={this.handleRadio} />                        
                    </label>                
                    <label>
                        Polymer
                        <input type="radio" name="radioGroup" value="polymer" checked={this.state.radioGroup["polymer"]} onChange={this.handleRadio} />                        
                    </label>
                    <br/>
                    <h2>input: radio2</h2>
                    <label>
                        Angular
                        <input type="radio" name="radioGroup2" value="angular" checked={this.state.radioGroup2["angular"]} onChange={this.handleRadio2} />                        
                    </label>                
                    <label>
                        React
                        <input type="radio" name="radioGroup2" value="react" checked={this.state.radioGroup2["react"]} onChange={this.handleRadio2} />                        
                    </label>                
                    <label>
                        Polymer
                        <input type="radio" name="radioGroup2" value="polymer" checked={this.state.radioGroup2["polymer"]} onChange={this.handleRadio2} />                        
                    </label>
                    <br/>
                    <h2>input: checkbox</h2>
                    <label>
                        Node
                        <input type="checkbox" name="checkboxGroup" value="node" checked={this.state.checkboxGroup["node"]} onChange={this.handleCheckbox} />                        
                    </label>
                    <label>
                        React
                        <input type="checkbox" name="checkboxGroup" value="react" checked={this.state.checkboxGroup["react"]} onChange={this.handleCheckbox} />                        
                    </label>
                    <label>
                        Express
                        <input type="checkbox" name="checkboxGroup" value="express" checked={this.state.checkboxGroup["express"]} onChange={this.handleCheckbox} />                        
                    </label>
                    <label>
                        MongoDB
                        <input type="checkbox" name="checkboxGroup" value="mongodb" checked={this.state.checkboxGroup["mongodb"]} onChange={this.handleCheckbox} />                        
                    </label>
                    <br/>
                    <h2>input: textarea</h2>
                    <b>Description</b>
                    <br/>
                    <textarea name="description" value={this.state.description} onChange={this.handleTextarea}/>
                    <br/>
                    <h2>input: select</h2>
                    <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
                        <option value="ruby">Ruby</option>
                        <option value="node">Node</option>
                        <option value="python">Python</option>
                    </select>
                    <br/>
                    <h2>input: select multiple</h2>
                    <select multiple={true} defaultValue={["meteor", "react"]} readOnly>
                        <option value="meteor">Meteor</option>
                        <option value="react">React</option>
                        <option value="jQuery">jQuery</option>                        
                    </select>
                </form>
            </div>
        );
    }
}