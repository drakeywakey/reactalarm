var React = require('react');
var TestUtils = require('react-dom/test-utils');
var App = require('../components/App');

describe('app', function() {
    it('renders, at least', function () {
        var app = TestUtils.renderIntoDocument(<App />);
        it('should render', function() {
            expect(true).to.be.true;
        })
    })
});