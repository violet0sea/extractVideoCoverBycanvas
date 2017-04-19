import React from 'react';
import ViewMore from '../../../component/ViewMore/ViewMore';
import Footer from '../../../component/Footer/Footer';

const btn = {
    style: {
        color: "white"
    },
    textContent: "ViewMore",
    value: "news"
}

export default function(props) {
    return(
        <div id="aboutUs" className="Home HomePage_6">
            <div className="page6Header">
                <h1 className={props.pageIndex === 5 ? 'h2_animation' : 'noAnimation'}>{props.data.pageSix.heading}</h1>
                {props.data.pageSix.info.map((d, i) => <p className={props.pageIndex === 5 ? 'h2_animation' : 'noAnimation'}key={i}>{d}</p>)}
            </div>

            <Footer data={props.data.pageSix.footer} />
        </div>
    );
}
