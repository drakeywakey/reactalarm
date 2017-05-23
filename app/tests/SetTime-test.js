var React = require('react');
var TestUtils = require('react-dom/test-utils');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;

var SetTime = require('../components/SetTime');

describe('<SetTime />', function() {
    // is it proper to just use a do-nothing function stub?
    const wrapper = shallow(<SetTime onSubmit={function() {}} />);

    it('sets the time whenever the input changes' , function () {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 0 }});
        expect(wrapper.state().time).to.equal(0);
        input.simulate('change', { target: { value: -5 }});
        expect(wrapper.state().time).to.equal(-5);
        input.simulate('change', { target: { value: 5 }});
        expect(wrapper.state().time).to.equal(5);
    })
});