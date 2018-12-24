import React from 'react';

const QuoteDetail = ({quote}) => {
    if(!quote) {
        return (<div></div>);
    }
    console.log(quote);
    return ( 
        <div>
            <h1>{quote.companyName}</h1>
            <h3>{quote.symbol} {quote.close}</h3>
        </div>
    );

}

export default QuoteDetail;