import React from 'react';
import ViewMore from '../../../component/ViewMore/ViewMore';
import NewsSideNav from '../../../component/NewsSideNav/NewsSideNav';

const btn2 = {
    style: {
        cursor: "pointer"
    },
    textContent: "ViewMore",
    value: "product"
}

export default function(props) {
    return(
        <div id="industry" className="Home HomePage_3">

            <div className="page3_left">
                <h1 className={props.pageIndex === 2 ? 'h2_animation' : 'noAnimation'}>{props.data.pageThree.heading}</h1>
                <p className={props.pageIndex === 2 ? 'h2_animation' : 'noAnimation'}>{props.data.pageThree.info}</p>
                <div className="industryChoose" onClick={props.industryClick}>
                    <img className={`${props.industryChoose==="police" ? "industryIconChoose" : ""} industryIcon`}data-value="police" src='/public/images/industryIcon1.png' />
                    <img className={`${props.industryChoose==="aviation" ? "industryIconChoose" : ""} industryIcon`}data-value="aviation" src='/public/images/industryIcon2.png' />
                    <img className={`${props.industryChoose==="smartCity" ? "industryIconChoose" : ""} industryIcon`} data-value="smartCity" src='/public/images/industryIcon3.png' />
                </div>
                <div className="industryChooseIcon aviation">{props.industryChoose.toUpperCase()}</div>
                <img className="industryChooseTip" src='/public/images/page4ChooseIcon.png' />
            </div>
            <div className="page3news">
                <p className={props.pageIndex === 2 ? 'h2_animation' : 'noAnimation'}>{props.initialNews[props.industryChoose].info}</p>
                <ViewMore                             
                    data={btn2}
                    handlerMouseOver={props.handlerMouseOver}
                    handlerClick={props.handlerClick}/>
            </div>
            <img className="page3_right" src="/public/images/page3_right.png" />
            
        </div>

    );
}