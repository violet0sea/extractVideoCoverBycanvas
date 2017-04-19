import React from 'react';
import './Footer.scss';
export default function footer(props) {
    return (
        <footer className="Home_footer">
            {props.data.map(d => {
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
    );
}