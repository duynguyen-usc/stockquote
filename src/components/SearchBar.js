import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ticker: ''
        };
    }

    onInputChange = (e) => {
        this.setState({
            ticker: e.target.value
        });
    }

    render () {
        return (
            <div>
                <label>Enter stock ticker</label>
                <input 
                    type="text"
                    value={this.state.ticker}
                    onChange={this.onInputChange} />
            </div>
        );
    }
}