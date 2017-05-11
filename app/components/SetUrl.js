var React = require('react');
var PropTypes = require('prop-types');

class SetUrl extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var val = event.target.value;
        this.setState(function() {
            return {
                url: val
            }
        })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Video URL' onChange={this.handleChange}/>
                <button onClick={this.props.onSubmit.bind(null, this.state.url)}>Set</button>
            </div>
        )
    }
}

SetUrl.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = SetUrl;