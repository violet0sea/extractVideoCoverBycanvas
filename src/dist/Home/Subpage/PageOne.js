import React from 'react';
import SlideButton from '../../../component/SlideButton/SlideButton';

export default function(props) {
    return(
        <div className="Home HomePage_1">
            <SlideButton buttonForUp={props.buttonForUp} buttonForDown={props.buttonForDown}/>
            <section className="home_title">
                <h1 className={`home_title1${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title1}</h1>
                <p className={`home_title2${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title2}</p>
                <p className={`home_title3${props.pageIndex === 0 ? ' h2_animation' : ''}`}>{props.data.pageOne.title3}</p>
            </section>

        </div>
    );
}