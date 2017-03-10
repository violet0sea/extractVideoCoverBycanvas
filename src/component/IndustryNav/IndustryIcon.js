import React from 'react';

function IndustryIcon(props) {
    console.log(props)
    return(
        <img className='IndustryIcon' src={props.data.iconSrc} onClick={props.iconClick}/>
    );

}

export default IndustryIcon;