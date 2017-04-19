import React from 'react';
import './SlideButton.scss';

export default function(props) {

    return(
        <div className="upAndDown">
            <div className="buttonScroll buttonForUp" onClick={props.buttonForUp}></div>
            <div className="maskPoint"></div>
            <div className="buttonScroll buttonForDown" onClick={props.buttonForDown}></div>
        </div>
    );

}
