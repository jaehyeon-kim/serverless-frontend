const React = require('react');
const ReactDOM = require('react-dom');

const { HelloWorld } = require('./components/helloworld')

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
)
