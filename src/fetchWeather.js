const fetchWeather = (query, props) => {
    let requestURL = encodeURI(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${query}")&format=json&env=store://datatables.org/alltableswithkeys`);
    fetch(requestURL)
        .then(response => {
            return response.text();
        })
        .then(response => JSON.parse(response))
        .then(weather => {
            if (weather.query.results !== null && weather.query.results.channel.location !== undefined) {
                console.log(weather.query.results)
                let specificLocation = `${weather.query.results.channel.location.city}, ${weather.query.results.channel.location.region}, ${weather.query.results.channel.location.country}`
                props.dispatch({type: 'ADD_LOCATION', specific: specificLocation, link: weather.query.results.channel.link});
                props.dispatch({type: 'UPDATE_CURRENT_LOCATION', location: weather, specific: specificLocation, link: weather.query.results.channel.link});
            }
        })
    }
export default fetchWeather;