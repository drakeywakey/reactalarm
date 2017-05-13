var React = require('react');
var PropTypes = require('prop-types');

function DisplayUrl(props) {
    return (
        <div className='display display-url'>
            <span>
                <span><a href={props.url}>{props.url}</a></span>
                <button onClick={props.onSubmit.bind(this, null)}>Reset</button>
            </span>
        </div>
    )
}

DisplayUrl.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

module.exports = DisplayUrl;