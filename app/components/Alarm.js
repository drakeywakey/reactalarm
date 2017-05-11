var React = require('react');

class Alarm extends React.Component {
    render() {
        return (
            <iframe title="YouTube video player" class="youtube-player" type="text/html" 
                width="640" height="390" src="http://www.youtube.com/embed/pBkHHoOIIn8"
                frameborder="0" allowFullScreen>
            </iframe>
        )
    }
}

module.exports = Alarm;