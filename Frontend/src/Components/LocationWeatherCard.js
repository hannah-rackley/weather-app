import React from 'react';
import { connect } from 'react-redux';
import TodayTemplate from './TodayTemplate';

const LocationWeatherCard = (props) => {
    let specificLocation = props.location[0].specific;
    return (
        <div className='location-weather-card'>
            <button onClick={() => {props.dispatch({ type: "REMOVE_LOCATION", specific: specificLocation })}}>X</button>
            <TodayTemplate location={props.location} specific={specificLocation}/>
            <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
        </div>
    )
}

const SmartLocationWeatherCard = connect(state => ({dispatch: state.dispatch}))(LocationWeatherCard)
export default SmartLocationWeatherCard;