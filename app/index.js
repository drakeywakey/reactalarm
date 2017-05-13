var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');

require('./index.less');


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
