import React from 'react';
import ViewMore from '../../../component/ViewMore/ViewMore';

const btn = {
    style: {
        color: "white"
    },
    textContent: "ViewMore",
    value: "news"
}

export default function(props) {
    return(
        <div className="Home HomePage_5">
            <div className="page5_left">
                <h1 className={props.pageIndex === 4 ? 'h2_animation' : 'noAnimation'}>City Partner</h1>
                <p className={props.pageIndex === 4 ? 'h2_animation' : 'noAnimation'}>news is here</p>
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