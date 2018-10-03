import React from 'react';
import SmartLocationSearchForm from './LocationSearchForm'
import { connect } from 'react-redux';
import SmartLocationWeatherCard from './LocationWeatherCard'

const Homepage = (props) => {
    return (
        <div>
            <h1>Weather App</h1>
            <SmartLocationSearchForm />
            {props.locations !== undefined ? props.locations.map(location => <SmartLocationWeatherCard key={location.link} location={location}/>) : null}
        </div>
    )
}

let SmartHomepage = connect(state => state)(Homepage);


export default SmartHomepage;