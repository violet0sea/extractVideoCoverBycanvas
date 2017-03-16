import React from 'react';
import ViewMore from '../../../component/ViewMore/ViewMore';

const btn = {
    textContent: "ViewMore",
    value: "cityPartners"
}

export default function(props) {
    console.log(props)
    return(
        <div className="Home HomePage_5">
            <div className="page5_left">
                <h1 className={props.pageIndex === 4 ? 'h2_animation' : 'noAnimation'}>{props.data.pageFive.heading}</h1>
                <p className={props.pageIndex === 4 ? 'h2_animation' : 'noAnimation'}>{props.data.pageFive.info}</p>
                <ViewMore
                    data={btn}
                    handlerMouseOver={props.handlerMouseOver}
                    handlerClick={props.handlerClick}/>
            </div>
            <div className="page5_right">
                <img src="/public/images/page5right.png" />
            </div>
        </div>
    );
}