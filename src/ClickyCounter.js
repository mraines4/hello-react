import React from 'react';

class ClickyCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.number}</h3>
                <button
                    onClick={this._incrementNumber}
                >+</button>
            </div>
        );
    }

    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
}

export default ClickyCounter