var React = require('react');
var SetUrl = require('./SetUrl');
var SetTime = require('./SetTime');
var DisplayUrl = require('./DisplayUrl');

class SetAlarm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: null,
            url: null
        }

        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
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
                {this.state.url ? <DisplayUrl url={this.state.url} onSubmit={this.handleUrlSubmit}/> : <SetUrl onSubmit={this.handleUrlSubmit}/>}
                {this.state.time ? <DisplayTime /> : <SetTime />}
            </div>
        )
    }
}

module.exports = SetAlarm;