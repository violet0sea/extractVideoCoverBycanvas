import React from 'react';
import ViewMore from '../../../component/ViewMore/ViewMore';
import NewsSideNav from '../../../component/NewsSideNav/NewsSideNav';

const btn = {
    style: {
        color: "white"
    },
    textContent: "ViewMore",
    value: "news"
}

export default function(props) {
    return(
        <div className="Home HomePage_2">
            <div className="page2_left">
                <h1 className={props.pageIndex === 1 ? 'h2_animation' : 'noAnimation'}>{props.data.pageTwo.heading}</h1>
                <div className="HomePageNews">
                    <h2 className={props.pageIndex === 1 ? 'h2_animation' : 'noAnimation'}>{props.initialNews[props.pageTwoChoose].heading}</h2>
                    <p className={props.pageIndex === 1 ? 'h2_animation' : 'noAnimation'}>{props.initialNews[props.pageTwoChoose].info}</p>
                </div>
                <ViewMore
                    data={btn}
                    handlerMouseOver={props.handlerMouseOver}
                    handlerClick={props.handlerClick}/>
                <img src={props.news.imgSrc}/>
            </div>
            <div className="page2_right">
                <NewsSideNav data={props.data.pageTwo.sideBar} sideNavClick={props.sideNavClick}/>
            </div>
        </div>

    );
}