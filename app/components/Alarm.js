var React = require('react');
var PropTypes = require('prop-types');

function Alarm(props) {
    var url = props.url;
    url = url.replace('watch?v=', 'embed/')

    return (
        <iframe title="YouTube video player" className="youtube-player" type="text/html" 
            width="640" height="390" src={url}
            frameborder="0" allowFullScreen>
        </iframe>
    )
}

Alarm.propTypes = {
    url: PropTypes.string.isRequired
}

module.exports = Alarm;