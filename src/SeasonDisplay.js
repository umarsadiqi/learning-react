import React from "react";

import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) { // April -> September
        return lat > 0 ? 'summer' : 'winter';
    } else { // October -> March
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const SeasonDisplay = props => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    // seasonConfig
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;
