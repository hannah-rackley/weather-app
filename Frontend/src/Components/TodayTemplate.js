import React from 'react';

const TodayTemplate = (props) => {
    let prefix = props.location.location.query.results.channel;
    let atmosphere = prefix.atmosphere;
    let conditions = prefix.item.condition.text;
    let date = prefix.item.condition.date;
    let currentTemp = prefix.item.condition.temp;
    let high = prefix.item.forecast[0].high;
    let low = prefix.item.forecast[0].low;
    let sunrise = prefix.astronomy.sunrise;
    let sunset = prefix.astronomy.sunset;
    return (
        <div>
            <h1>{props.location.specific}</h1>
            <h2>{date}</h2>
            <p>Weather conditions are: {conditions}</p>
            <p>Current Temperature for the day: {currentTemp}</p>
            <p>{high}, {low}, {sunrise}, {sunset}</p>
        </div>
    )

}

export default TodayTemplate;