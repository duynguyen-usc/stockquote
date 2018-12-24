import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../css/app.css';

export default class Chart extends React.Component {

    render() {
        if(!this.props.priceData) {
            return (<div></div>);
        }

        return (
            <div className="chart">
                <Sparklines height={120} width={180} data={this.props.priceData}>
                    <SparklinesLine color="red"/> 
                </Sparklines>
            </div>
        )
    }
}