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
            timeError: null,
            url: null,
            urlError: null
        }

        this.handleTimeSubmit = this.handleTimeSubmit.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    }

    handleTimeSubmit(time) {
        this.setState(function() {
            if (isNaN(time) || time < 0) {
                return {
                    timeError: 'Please enter a number of minutes greater than 0'
                }
            }

            return {
                time: time,
                timeError: null
            }
        })
    }
    
    handleUrlSubmit(url) {
        this.setState(function () {
            // validate the url format
            if (url.match(/https:\/\/www\.youtube\.com\/watch\?v/)) {
                return {
                    url: url,
                    urlError: null
                }
            }
            else {
                return {
                    urlError: 'Please enter a url with the format: https://www.youtube.com/watch?v='
                }
            }
        })
    }

    render() {
        return (
            <div className='set-alarm'>
                {this.state.urlError && <p className='error'>{this.state.urlError}</p>}
                {this.state.url ? 
                    <DisplayUrl url={this.state.url} onSubmit={this.handleUrlSubmit}/> : 
                    <SetUrl onSubmit={this.handleUrlSubmit}/>
                }
                {this.state.timeError && <p className='error'>{this.state.timeError}</p>}
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