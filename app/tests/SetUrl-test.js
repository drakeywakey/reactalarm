var React = require('react');
var TestUtils = require('react-dom/test-utils');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;

var SetUrl = require('../components/SetUrl');

describe('<SetUrl />', function() {
    // is it proper to just use a do-nothing function stub?
    const wrapper = shallow(<SetUrl onSubmit={function() {}} />);

    it('sets the url whenever the input changes' , function () {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'abc' }});
        expect(wrapper.state().url).to.equal('abc');
        input.simulate('change', { target: { value: 123 }});
        expect(wrapper.state().url).to.equal(123);
        input.simulate('change', { target: { value: 'youtube' }});
        expect(wrapper.state().url).to.equal('youtube');
    })
});