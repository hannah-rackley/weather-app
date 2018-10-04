import React from 'react';
import SmartLocationSearchForm from './LocationSearchForm'
import { connect } from 'react-redux';
import SmartLocationWeatherCard from './LocationWeatherCard'
import fetchSelectedWeather from '../fetchSelectedWeather'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.onLocationSelected = this.onLocationSelected.bind(this);
    }

    onLocationSelected(location) {
        fetchSelectedWeather(location, this.props)
    }

    createSelectList() {
        let locationSelectList = [];
        if (this.props.locations !== undefined) {
            locationSelectList = this.props.locations.map(location => 
                <div onClick={() => {this.onLocationSelected(location.specific)}} key={location.link} value={location.specific}>
                    {location.specific}
                    <button onClick={(event) => {
                        event.stopPropagation();
                        this.props.dispatch({ type: "REMOVE_LOCATION", specific: location.specific});
                        this.props.dispatch({type: 'UPDATE_CURRENT_LOCATION', location: null});
                        }}>X</button>
                </div>)
            return locationSelectList;
        }
        return locationSelectList;
    }

    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <SmartLocationSearchForm />
                <div>
                    {this.createSelectList()}
                </div>
                {this.props.currentLocation !== null ? <SmartLocationWeatherCard key={this.props.currentLocation.link} location={this.props.currentLocation}/> : null}
            </div>
        )
    }
}

let SmartHomepage = connect(state => state)(Homepage);


export default SmartHomepage;