var React = require('react');

class SetUrl extends React.Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='Video URL' />
                <button>Set</button>
            </div>
        )
    }
}

module.exports = SetUrl;