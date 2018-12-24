import React from 'react';
import SearchBar from './SearchBar';
import QuoteDetail from './QuoteDetail';
import iextrading from '../apis/iextrading';
import Chart from './Chart';

export default class App extends React.Component {

    state = {
        quote: "",
        priceData: []
    };

    getQuote = async (ticker) => {
        const book = await iextrading.get(`/${ticker}/book`);
        const chart = await iextrading.get(`/${ticker}/chart/1Y`)
        
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
                <Chart priceData={this.state.priceData}/>
            </div>
        );
    }
}