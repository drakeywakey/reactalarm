var React = require('react');
var PropTypes = require('prop-types');

class Alarm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: props.time,
            seconds: '00',
            url: props.url.replace('watch?v=', 'embed/') + '?autoplay=1'
        }

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState(function(prevState) {
            var tempSeconds;
            var prevSeconds = Number(prevState.seconds)
            var prevMinutes = prevState.minutes;

            if (prevSeconds === 0 && prevMinutes > 0) {
                return {
                    minutes: prevMinutes - 1,
                    seconds: '59'
                }
            }
            else {
                if (prevSeconds === 0 && prevMinutes === 0) {
                    clearInterval(this.timer);
                    return
                }

                tempSeconds = (prevSeconds - 1).toString();
                return {
                    seconds: tempSeconds.length === 1 ? '0' + tempSeconds : tempSeconds
                }
            }
        })
    }

    render() {
        return (
            <div className='alarm'>
                {!(this.state.minutes === 0 && this.state.seconds === '00') ?
                <div>{this.state.minutes} : {this.state.seconds}</div> :
                <iframe title="YouTube video player" type="text/html" 
                    width="640" height="390" src={this.state.url}
                    frameBorder="0" allowFullScreen>
                </iframe>
                }
                <button onClick={this.props.reset.bind(null, null, null)}>Reset</button>
            </div>
        )
    }
}

Alarm.propTypes = {
    reset: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}

module.exports = Alarm;