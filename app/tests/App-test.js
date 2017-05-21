var React = require('react');
var TestUtils = require('react-dom/test-utils');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;

var App = require('../components/App');
var SetAlarm = require('../components/SetAlarm');
var Alarm = require('../components/Alarm');

describe('<App />', function() {
    const wrapper = shallow(<App />);

    it('renders a <SetAlarm /> component on load', function () {
        expect(wrapper.find(SetAlarm)).to.have.length(1);
        expect(wrapper.find(Alarm)).to.have.length(0);
    }),

    it('renders an <Alarm /> component when time and url are set', function() {
        wrapper.setState({ time: 1, url: 'www.yep.net' });
        expect(wrapper.find(Alarm)).to.have.length(1);
        expect(wrapper.find(SetAlarm)).to.have.length(0);
    })
});