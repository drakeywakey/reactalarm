var React = require('react');
var SetAlarm = require('./SetAlarm');
var Alarm = require('./Alarm');

require('../styles/app.less');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: null,
            url: null
        }

        this.setTimeAndUrl = this.setTimeAndUrl.bind(this);
    }

    setTimeAndUrl(url, time) {
        this.setState(function() {
            return {
                time: time,
                url: url
            }
        })
    }

    render() {
        return (
            <div className='app'>
                {this.state.url ? 
                    <Alarm time={this.state.time} url={this.state.url} reset={this.setTimeAndUrl}/> : 
                    <SetAlarm setTimeAndUrl={this.setTimeAndUrl}/>}
            </div>
        )
    }
}

module.exports = App;