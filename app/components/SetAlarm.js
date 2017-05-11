var React = require('react');
var SetUrl = require('./SetUrl');
var SetTime = require('./SetTime');
var DisplayUrl = require('./DisplayUrl');
var DisplayTime = require('./DisplayTime');

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
            <div>
                {this.state.url ? 
                    <DisplayUrl url={this.state.url} onSubmit={this.handleUrlSubmit}/> : 
                    <SetUrl onSubmit={this.handleUrlSubmit}/>
                }
                {this.state.time ? 
                    <DisplayTime time={this.state.time} onSubmit={this.handleTimeSubmit}/> : 
                    <SetTime onSubmit={this.handleTimeSubmit}/>
                }
            </div>
        )
    }
}

module.exports = SetAlarm;