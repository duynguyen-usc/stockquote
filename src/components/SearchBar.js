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

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.ticker);
    }

    render () {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter stock ticker</label>
                        <input 
                            type="text"
                            value={this.state.ticker}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}