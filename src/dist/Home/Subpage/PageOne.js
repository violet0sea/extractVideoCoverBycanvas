import React from 'react';

export default function(props) {
    return(
        <div className="Home HomePage_1">

            <div className="upAndDown">
                <div className="buttonScroll buttonForUp" onClick={props.buttonForUp}></div>
                <div className="maskPoint"></div>
                <div className="buttonScroll buttonForDown" onClick={props.buttonForDown}></div>
            </div>
            <section className="home_title">
                <p className={`home_title1${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title1}</p>
                <p className={`home_title2${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title2}</p>
                <p className={`home_title3${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title3}</p>
            </section>

        </div>
    );
}