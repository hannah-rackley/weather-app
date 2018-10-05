import React from 'react';

const TodayTemplate = (props) => {
    let location = props.location[0];
    if (location !== undefined) {
        let prefix = location.location.query.results.channel;
        let atmosphere = prefix.atmosphere;
        let conditions = prefix.item.condition.text;
        let date = prefix.item.condition.date;
        let currentTemp = prefix.item.condition.temp;
        let high = prefix.item.forecast[0].high;
        let low = prefix.item.forecast[0].low;
        let sunrise = prefix.astronomy.sunrise;
        let sunset = prefix.astronomy.sunset;
        return (
            <div className='today-template'>
                <h1>{location.specific}</h1>
                <h1>{currentTemp}&#8457;</h1>
                <p>Current conditions: {conditions}</p>
                <p>Humidity: {atmosphere.humidity}%</p>
                <p>High: {high}&#8457;</p>
                <p>Low: {low}&#8457; </p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p> 
                <p>{date}</p>
            </div>)
    } else {
        return null;
    }
}

export default TodayTemplate;