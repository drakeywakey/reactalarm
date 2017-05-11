var React = require('react');
var PropTypes = require('prop-types');

class DisplayUrl extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.url}>{this.props.url}</a>
                <button onClick={this.props.onSubmit.bind(this, null)}>Reset</button>
            </div>
        )
    }
}

DisplayUrl.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

module.exports = DisplayUrl;