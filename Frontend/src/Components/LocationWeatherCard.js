import React from 'react';
import { connect } from 'react-redux';
import TodayTemplate from './TodayTemplate';

const LocationWeatherCard = (props) => {
    let specificLocation = props.location.specific;
    return (
        <div className='location-weather-card'>
            <TodayTemplate location={props.location} />
            <button onClick={() => props.dispatch({ type: "REMOVE_LOCATION", specific: specificLocation })} className="btn btn-danger">X</button>
        </div>
    )
}

const SmartLocationWeatherCard = connect(state => ({dispatch: state.dispatch}))(LocationWeatherCard)
export default SmartLocationWeatherCard;