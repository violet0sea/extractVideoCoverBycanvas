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
        <div className="Home HomePage_6">
            <div className="page6Header">
                <h1 className={props.pageIndex === 5 ? 'h2_animation' : 'noAnimation'}>{props.data.pageSix.heading}</h1>
                {props.data.pageSix.info.map((d, i) => <p className={props.pageIndex === 5 ? 'h2_animation' : 'noAnimation'}key={i}>{d}</p>)}
            </div>
            <footer className="Home_footer">
                {props.data.pageSix.footer.map(d => {
                    return (
                        <div className={d.id} key={d.id}>
                            <h2>{d.heading}</h2>
                            {d.p.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                    )
                })}

            </footer>
        </div>
    );
}