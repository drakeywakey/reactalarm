var React = require('react');
var SetAlarm = require('./SetAlarm');
var Alarm = require('./Alarm');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            on: false,
            time: null,
            url: null
        }

        this.setTimeAndUrl = this.setTimeAndUrl.bind(this);
    }

    setTimeAndUrl(url, time) {
        this.setState(function() {
            return {
                //just for now, set on=true
                on: true,
                time: time,
                url: url
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.on ? <Alarm url={this.state.url}/> : <SetAlarm setTimeAndUrl={this.setTimeAndUrl}/>}
            </div>
        )
    }
}

module.exports = App;