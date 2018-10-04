import React from 'react';
import SmartLocationSearchForm from './LocationSearchForm'
import { connect } from 'react-redux';
import SmartLocationWeatherCard from './LocationWeatherCard'
import fetchSelectedWeather from '../fetchSelectedWeather'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: undefined
        }
        this.onLocationSelected = this.onLocationSelected.bind(this);
    }

    createSelectList() {
        let locationSelectList = [];
        if (this.props.locations !== undefined) {
            locationSelectList = this.props.locations.map(location => <option key={location.link} value={location.specific}>{location.specific}</option>)
            return locationSelectList;
        }
        return locationSelectList;
    }

    onLocationSelected(event) {
        let requestURL = encodeURI(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${event.target.value}")&format=json&env=store://datatables.org/alltableswithkeys`);
        fetch(requestURL)
            .then(response => {
                return response.text();
            })
            .then(response => JSON.parse(response))
            .then(weather => {
                let specificLocation = `${weather.query.results.channel.location.city}, ${weather.query.results.channel.location.region}, ${weather.query.results.channel.location.country}`
                this.props.dispatch({type: 'UPDATE_CURRENT_LOCATION', location: weather, specific: specificLocation, link: weather.query.results.channel.link})
            })
            .then(() => {
                this.setState({ currentLocation: this.props.currentLocation})
            })
        }

    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <SmartLocationSearchForm />
                <select type="select" onChange={this.onLocationSelected} label="Select Location" multiple>
                    {this.createSelectList()}
                </select>
                {this.state.currentLocation !== undefined ? <SmartLocationWeatherCard key={this.state.currentLocation.link} location={this.state.currentLocation}/> : null}
            </div>
        )
    }
}

let SmartHomepage = connect(state => state)(Homepage);


export default SmartHomepage;