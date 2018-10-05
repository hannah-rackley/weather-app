import React from 'react';
import ThreeDayColumn from './ThreeDayColumn';

const ThreeDayTemplate = (props) => {
    let location = props.location[0];
    let forecasts = [];
    if (location !== undefined) {
        for (let i = 0; i < 3; i++) {
            forecasts.push(<ThreeDayColumn location={location} i={i} key={i}/>)
        }
        return (
            <div className='three-day-template'>
                <h1>{location.specific}</h1>
                <div className='three-day-template-forecasts'>
                    {forecasts}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default ThreeDayTemplate;