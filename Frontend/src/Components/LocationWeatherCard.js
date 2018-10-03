import React from 'react';
import { connect } from 'react-redux'

const LocationWeatherCard = (props) => {
    let specificLocation = props.location.specific;
    return (
        <div className='location-weather-card'>
            <p>{props.location.specific}</p>
            <button onClick={() => props.dispatch({ type: "REMOVE_LOCATION", specific: specificLocation })} className="btn btn-danger">X</button>
        </div>
    )
}

const SmartLocationWeatherCard = connect(state => ({dispatch: state.dispatch}))(LocationWeatherCard)
export default SmartLocationWeatherCard;