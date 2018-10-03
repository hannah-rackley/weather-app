import React from 'react';
import { connect } from 'react-redux';
import LocationSearchBar from './LocationSearchBar'
import fetchWeather from '../fetchWeather'

class LocationSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newInput: "",
        }
    }

    searchLocations = (event) => {
        event.preventDefault();
        let query = event.target.children[0].value;
        this.setState({ newInput: "" });
        fetchWeather(query, this.props);
    }

    handleNewInput = (event) => this.setState({ newInput: event.target.value });

    render() {
        return (
            <div>
                <LocationSearchBar searchLocations={this.searchLocations} handleNewInput={this.handleNewInput} newInput={this.state.newInput}/>
            </div>)
  }
}

let SmartLocationSearchForm = connect(state => state)(LocationSearchForm);

export default SmartLocationSearchForm;