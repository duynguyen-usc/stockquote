import React from 'react';
import '../css/quote-detail.css';

const QuoteDetail = ({quote}) => {
    if(!quote) {
        return (<div></div>);
    }

    const percentChange = (quote.changePercent * 100).toFixed(2);
    return ( 
        <div className="ui grid">
            <div className="ui row">
                <div className="company-name">
                    {quote.companyName} 
                </div>
                <div className="quote">
                    {quote.symbol} {quote.close}
                </div>
                <div className="price-change">
                    {quote.change} ({percentChange}%)
                </div>
            </div>
            
        </div>
    );

}

export default QuoteDetail;