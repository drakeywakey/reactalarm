var React = require('react');
var PropTypes = require('prop-types');

class DisplayTime extends React.Component {
    render() {
        return (
            <div>
                <p>In {this.props.time} minutes</p>
                <button onClick={this.props.onSubmit.bind(this, null)}>Reset</button>
            </div>
        )
    }
}

DisplayTime.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired
}

module.exports = DisplayTime;