let helloWorldElement = <h1>Hello World!</h1>

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {helloWorldElement}
                {helloWorldElement}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
)