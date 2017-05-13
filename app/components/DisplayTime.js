var React = require('react');
var PropTypes = require('prop-types');

function DisplayTime(props) {
    return (
        <div className='display display-time'>
            <span>
                <span>In {props.time} minutes</span>
                <button onClick={props.onSubmit.bind(this, null)}>Reset</button>
            </span>
        </div>
    )
}

DisplayTime.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired
}

module.exports = DisplayTime;