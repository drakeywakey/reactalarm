var React = require('react');
var SetUrl = require('./SetUrl');
var SetTime = require('./SetTime');

class SetAlarm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeSet: false,
            urlSet: false
        }
    }

    render() {
        return (
            <div>
                {this.state.urlSet ? <DisplayUrl /> : <SetUrl />}
                {this.state.timeSet ? <DisplayTime /> : <SetTime />}
            </div>
        )
    }
}

module.exports = SetAlarm;