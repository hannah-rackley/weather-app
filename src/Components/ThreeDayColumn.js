import React from 'react';

const ThreeDayColumn = (props) => {
    let forecastPrefix = props.location.location.query.results.channel.item.forecast[props.i];
    let day = forecastPrefix.day;
    let high = forecastPrefix.high;
    let condition = forecastPrefix.text;
    let low = forecastPrefix.low;
        return (
            <div className='three-day-column'>
                <h2>{day}</h2>
                <p>Predicted Conditions: {condition}</p>
                <p>High: {high}&#8457; </p> 
                <p>Low: {low}&#8457; </p>
            </div> 
        )
}

export default ThreeDayColumn;