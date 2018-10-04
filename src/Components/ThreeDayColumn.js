import React from 'react';

const ThreeDayTemplate = (props) => {
    let forecastPrefix = props.location.location.query.results.channel.item.forecast[props.i];
    let date = forecastPrefix.date;
    let day = forecastPrefix.day;
    let high = forecastPrefix.high;
    let condition = forecastPrefix.text;
    let low = forecastPrefix.low;
    if (props.i === 0) {
        return (
            <div>
                <h1>{props.location.specific}</h1>
                <h2>{day}</h2>
                <p>{high}, {low}, {condition}</p>
            </div> 
        )
    } else {
        return (
            <div>
                <h2>{day}</h2>
                <p>{high}, {low}, {condition}</p>
            </div>
        )
    }
}

export default ThreeDayTemplate;