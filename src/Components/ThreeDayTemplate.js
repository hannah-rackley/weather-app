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
            <div>
                {forecasts}
            </div>
        )
    } else {
        return null;
    }
}

export default ThreeDayTemplate;