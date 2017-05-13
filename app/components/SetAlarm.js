var React = require('react');
var SetUrl = require('./SetUrl');
var SetTime = require('./SetTime');
var DisplayUrl = require('./DisplayUrl');
var DisplayTime = require('./DisplayTime');
var PropTypes = require('prop-types');

require('../styles/setAlarm.less');

class SetAlarm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: null,
            url: null
        }

        this.handleTimeSubmit = this.handleTimeSubmit.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    }

    handleTimeSubmit(time) {
        this.setState(function() {
            return {
                time: time
            }
        })
    }
    
    handleUrlSubmit(url) {
        this.setState(function () {
            return {
                url: url
            }
        })
    }

    render() {
        return (
            <div className='set-alarm'>
                {this.state.url ? 
                    <DisplayUrl url={this.state.url} onSubmit={this.handleUrlSubmit}/> : 
                    <SetUrl onSubmit={this.handleUrlSubmit}/>
                }
                {this.state.time !== null ? 
                    <DisplayTime time={this.state.time} onSubmit={this.handleTimeSubmit}/> : 
                    <SetTime onSubmit={this.handleTimeSubmit}/>
                }
                {this.state.time !== null && this.state.url && <button onClick={this.props.setTimeAndUrl.bind(null, this.state.url, this.state.time)}>Set Alarm</button>}
            </div>
        )
    }
}

SetAlarm.propTypes = {
    setTimeAndUrl: PropTypes.func.isRequired
}

module.exports = SetAlarm;