import React from 'react';
import LocationSearchForm from './LocationSearchForm'
import { connect } from 'react-redux';

const Homepage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Weather App</h1>
            <LocationSearchForm />
            {props.locations !== undefined ? props.locations.map(location => <p key={location.link}>{location.specific}</p>) : null}
        </div>
    )
}

let SmartHomepage = connect(state => state)(Homepage);


export default SmartHomepage;