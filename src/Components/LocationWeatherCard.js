import React from 'react';
import { connect } from 'react-redux';
import TodayTemplate from './TodayTemplate';

class LocationWeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageToday: "today"
        }
    }

    render() {
        let specificLocation = this.props.location[0].specific;
        return (
            <div className='location-weather-card'>
                <button onClick={() => {this.props.dispatch({ type: "REMOVE_LOCATION", specific: specificLocation })}}>X</button>
                <button onClick={() => {this.setState({currentPage: "future"})}}>Future</button>
                <button onClick={() => {this.setState({currentPage: "today"})}}>Current</button>
                {this.state.currentPage !== "future" ? <TodayTemplate location={this.props.location} specific={specificLocation}/> : <p>{specificLocation} Future!!!</p>}
                <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
            </div>
        )
    }
    
}

const SmartLocationWeatherCard = connect(state => ({dispatch: state.dispatch}))(LocationWeatherCard)
export default SmartLocationWeatherCard;