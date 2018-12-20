import React from 'react';
import SearchBar from './SearchBar';
import alphavantage from '../apis/alphavantage';

export default class App extends React.Component {

    getQuote = async () => {
        const quote = await alphavantage.get('query', {
            params: { 
                symbol: "SPX"
            }
        });
        
        console.log(quote);
    }

    componentDidMount() {
        this.getQuote()
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar/>
                <div></div>
            </div>
        );
    }
}