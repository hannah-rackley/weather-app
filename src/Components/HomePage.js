import React from 'react';
import SmartLocationSearchForm from './LocationSearchForm'
import { connect } from 'react-redux';
import SmartLocationWeatherCard from './LocationWeatherCard'
import fetchSelectedWeather from '../fetchSelectedWeather'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
        this.onLocationSelected = this.onLocationSelected.bind(this);
        this.toggleDisplayNone = this.toggleDisplayNone.bind(this);
        this.createSelectList = this.createSelectList.bind(this);
    }

    toggleDisplayNone() {
        if (this.state.display === 'none') {
            this.setState({display: ''})
        } else {
            this.setState({display: 'none'})
        }
    }

    onLocationSelected(location) {
        fetchSelectedWeather(location, this.props);
    }

    createSelectList() {
        let locationSelectList = [];
        if (this.props.locations !== undefined) {
            locationSelectList = this.props.locations.map(location => 
                <div onClick={() => {
                    this.setState({display: 'none'});
                    this.onLocationSelected(location.specific)}} key={location.link} value={location.specific} className='location-list-item'>
                    <p>{location.specific}</p>
                    <button className='removal-button' onClick={(event) => {
                        event.stopPropagation();
                        this.props.dispatch({ type: "REMOVE_LOCATION", specific: location.specific});
                        if (this.props.currentLocation[0].specific === location.specific) {
                            this.props.dispatch({type: 'UPDATE_CURRENT_LOCATION', location: null});
                        }
                        }}>X</button>
                </div>)
            return locationSelectList;
        }
        return locationSelectList;
    }

    render() {
        return (
            <div className='homepage'>
                <div className='header'>
                    <h1>Weather App</h1>
                    <SmartLocationSearchForm />
                </div>
                <div className='recent-locations-list'>
                    <div className='recent-locations-header'>
                        <h4>Recent Locations</h4>
                        <button className='dropdown-button' onClick={this.toggleDisplayNone}>&#x25BC;</button>
                    </div>
                    <div className={`location-select-list ${this.state.display}`}>
                        {this.createSelectList()}
                    </div>
                </div>
                {this.props.currentLocation !== null ? <SmartLocationWeatherCard key={this.props.currentLocation.link} location={this.props.currentLocation}/> : null}
            </div>
        )
    }
}

let SmartHomepage = connect(state => state)(Homepage);


export default SmartHomepage;