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
            <div className='set set-url'>
                <input type='text' placeholder='Youtube URL' onChange={this.handleChange}/>
                <button onClick={this.props.onSubmit.bind(null, this.state.url, false)}>Set</button>
            </div>
        )
    }
}

SetUrl.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = SetUrl;