var React = require('react');
var SetAlarm = require('./SetAlarm');
var Alarm = require('./Alarm');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            on: false
        }
    }

    render() {
        return (
            <div>
                {this.state.on ? <Alarm /> : <SetAlarm />}
            </div>
        )
    }
}

module.exports = App;