var React = require('react');
var TestUtils = require('react-dom/test-utils');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;

var SetAlarm = require('../components/SetAlarm');
var SetUrl = require('../components/SetUrl');
var SetTime = require('../components/SetTime');
var DisplayUrl = require('../components/DisplayUrl');
var DisplayTime = require('../components/DisplayTime');

describe('<SetAlarm />', function() {
    // is it proper to just use a do-nothing function stub?
    var wrapper = shallow(<SetAlarm setTimeAndUrl={function() {}} />);

    it('renders a <SetTime /> and a <SetUrl /> on load' , function () {
        expect(wrapper.find(SetTime)).to.have.length(1);
        expect(wrapper.find(SetUrl)).to.have.length(1);
    })

    it('renders a <DisplayUrl /> if the url is set', function () {
        wrapper.setState({ url: 'something' });
        expect(wrapper.find(DisplayUrl)).to.have.length(1);
    })

    it('renders a <DisplayTime /> if the time is set', function () {
        wrapper.setState({ time: 1 });
        expect(wrapper.find(DisplayTime)).to.have.length(1);
    })

    it('sets a timeError if the time passed is not a number', function () {
        wrapper = shallow(<SetAlarm setTimeAndUrl={function() {}} />);
        wrapper.instance().handleTimeSubmit('abc');
        expect(wrapper.state().timeError).to.equal('Please enter a number of minutes at least 0');
        expect(wrapper.find('.error')).to.have.length(1);
    })

    it('sets a timeError if the time passed is less than 0', function () {
        wrapper = shallow(<SetAlarm setTimeAndUrl={function() {}} />);
        wrapper.instance().handleTimeSubmit(-1);
        expect(wrapper.state().timeError).to.equal('Please enter a number of minutes at least 0');
        expect(wrapper.find('.error')).to.have.length(1);
    })

    it('sets the time to the passed value and timeError to null if time is a number greater than 0', function () {
        wrapper = shallow(<SetAlarm setTimeAndUrl={function() {}} />);
        wrapper.instance().handleTimeSubmit(15);
        expect(wrapper.state().time).to.equal(15);
        expect(wrapper.state().timeError).to.be.null;
        expect(wrapper.find('.error')).to.have.length(0);
    })
});