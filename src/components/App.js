import React from 'react';
import SearchBar from './SearchBar';
import QuoteDetail from './QuoteDetail';
import Chart from './Chart';
import iextrading from '../apis/iextrading';

export default class App extends React.Component {

    state = {
        quote: ""
    };

    getQuote = async (ticker) => {
        const book = await iextrading.get(`/${ticker}/book`);
        const chart = await iextrading.get(`/${ticker}/chart/3m`)
        
        this.setState({
            quote: book.data.quote,
            priceData: chart.data.map(x => x.close)
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.getQuote} />
                <QuoteDetail quote={this.state.quote} />
            </div>
        );
    }
}