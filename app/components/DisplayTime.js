var React = require('react');
var PropTypes = require('prop-types');

function DisplayTime(props) {
    return (
        <div>
            <p>In {props.time} minutes
                <button onClick={props.onSubmit.bind(this, null)}>Reset</button>
            </p>
        </div>
    )
}

DisplayTime.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired
}

module.exports = DisplayTime;