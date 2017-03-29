const React = require('react');
const ReactDOM = require('react-dom');

const { Router } = require('./components/router');

ReactDOM.render(
    <Router />,
    document.getElementById('app')
)
