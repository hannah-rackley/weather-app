import React from 'react';
import { connect } from 'react-redux';
import TodayTemplate from './TodayTemplate';
import ThreeDayTemplate from './ThreeDayTemplate';

class LocationWeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "today"
        }
    }

    render() {
        let specificLocation = this.props.location[0].specific;
        let isTodayActive = this.state.currentPage === 'today' ? true : false;
        return (
            <div className='location-weather-card'>
                <div className='weather-toggle'>
                    <button className={isTodayActive ? 'weather-toggle-tab active' : 'weather-toggle-tab' } onClick={() => {this.setState({currentPage: "today"})}}>Current</button>
                    <button className={!isTodayActive ? 'weather-toggle-tab active' : 'weather-toggle-tab'} onClick={() => {this.setState({currentPage: "future"})}}>Future</button>
                </div>
                {this.state.currentPage !== "future" ? <TodayTemplate location={this.props.location} specific={specificLocation}/> : <ThreeDayTemplate location={this.props.location} specific={specificLocation}/>}
                <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
            </div>
        )
    }
    
}

const SmartLocationWeatherCard = connect(state => ({dispatch: state.dispatch}))(LocationWeatherCard)
export default SmartLocationWeatherCard;