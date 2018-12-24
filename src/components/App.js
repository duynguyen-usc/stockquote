import React from 'react';
import SearchBar from './SearchBar';
import QuoteDetail from './QuoteDetail';
import iextrading from '../apis/iextrading';

export default class App extends React.Component {

    state = {
        quote: ""
    };

    getQuote = async (ticker) => {
        const ret = await iextrading.get(`/${ticker}/ohlc`);
        
        this.setState({
            quote: ret.data.close.price
        });

        console.log(this.state.quote);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.getQuote} />
                <QuoteDetail />
            </div>
        );
    }
}