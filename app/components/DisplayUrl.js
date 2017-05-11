var React = require('react');
var PropTypes = require('prop-types');

function DisplayUrl(props) {
    return (
        <div>
            <a href={props.url}>{props.url}</a>
            <button onClick={props.onSubmit.bind(this, null)}>Reset</button>
        </div>
    )
}

DisplayUrl.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

module.exports = DisplayUrl;