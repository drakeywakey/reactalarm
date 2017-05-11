var React = require('react');
var PropTypes = require('prop-types');

class SetTime extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var val = event.target.value;
        this.setState(function() {
            return {
                time: Number(val)
            }
        })
    }

    render() {
        return (
            <div>
                <input type='number' min='0' max='1440' placeholder='minutes from now' onChange={this.handleChange}/>
                <button onClick={this.props.onSubmit.bind(null, this.state.time)}>Set</button>
            </div>
        )
    }
}

SetTime.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = SetTime;