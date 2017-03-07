/**
* @Author: haiwang
* @Date:   2017-02-28 11:08:57
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-02 14:11:37
*/



import React from 'react';
import { browserHistory } from 'react-router';
import ViewMore from '../../component/ViewMore/ViewMore';
import NewsSideNav from '../../component/NewsSideNav/NewsSideNav';
import ImagesSilde from '../../component/ImagesSlide/ImagesSilde';
import EnglishData from './englishData';
import ChineseData from './chineseData';
import './Home.scss';
const btn = {
    style: {
        color: "white"
    },
    textContent: "ViewMore",
    value: "news"
}
const btn2 = {
    style: {
        color: "#000",
        padding: "10px",
        marginTop: "20px",
        width: "65px",
        border: "1px solid #000",
        cursor: "pointer"
    },
    textContent: "ViewMore",
    value: "news"
}
const btn3 = {
    style: {
        color: "#000"
    },
    textContent: "ViewMore",
    value: "cityPartners"
}

class Home extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            showMask: true,
            news: {
                content: 'test text',
                imgSrc: '/public/images/newsImg.png'
            },
            pageTwoChoose: 'companyNews'
        };
        this.handlerClick = this.handlerClick.bind(this);
        this.sideNavClick = this.sideNavClick.bind(this);
        this.buttonForUp = this.buttonForUp.bind(this);
        this.buttonForDown = this.buttonForDown.bind(this);

    }
    handlerClick(value) {

        //todo need a ajax and change route
        console.log('value', value);
        browserHistory.push('/' + value)

    }
    sideNavClick(value) {

        //todo setState to change news in homePage2
        console.log('___', value)
        this.setState({
            pageTwoChoose: value
        });

    }
    buttonForUp() {

        const scrollTop = document.body.scrollTop;

        if(scrollTop === 0 && !this.state.showMask) {

            this.setState((prevState) => ({
                showMask: !prevState.showMask
            }));

        } else {

            document.body.scrollTop = Math.floor(scrollTop / 1015 - 0.00001) * 1015;

        }

    }    
    buttonForDown() {

        const scrollTop = document.body.scrollTop;

        if(scrollTop === 0 && this.state.showMask) {

            this.setState((prevState) => ({
                showMask: !prevState.showMask
            }));

        } else {

            document.body.scrollTop = Math.ceil(scrollTop / 1015 + 0.000001) * 1015;

        }

    }
    render() {

        const state = this.state;
        const { showMask } = state;
        const data = EnglishData;

        return (
            <div className="HomeContainer">
                { showMask ? <div className="Home_clipPath"></div> : null }
                { showMask 
                ? (
                    <div className="Home_mask">                    
                        <div className="H_letter">
                            <div className="HAnimation H_left"></div>
                            <div className="HAnimation H_middle"></div>
                            <div className="HAnimation H_right"></div>
                        </div>
                        <div className="description">
                            <p className="description_top">{data.mask.description.p1}</p>
                            <p className="description_top">{data.mask.description.p2}</p>
                            <p className="description_middle">{data.mask.description.p3}</p>
                            <p className="description_bottom">{data.mask.description.p4}</p>
                            <p className="description_bottom">{data.mask.description.p5}</p>
                            <p className="description_bottom">{data.mask.description.p6}</p>
                            <p className="description_bottom">{data.mask.description.p7}</p>
                            <p className="description_bottom">{data.mask.description.p8}</p>
                        </div>
                    </div>
                  )
                : null
                }

                <div className="Home HomePage_1">
                    
                    <div className="buttonScroll buttonForUp" onClick={this.buttonForUp}>
                        <div className="maskPoint"></div>
                    </div>
                    <div className="buttonScroll buttonForDown" onClick={this.buttonForDown}>
                        <div className="maskPoint"></div>
                    </div>
                    <p className="home_title1">{data.pageOne.title1}</p>
                    <p className="home_title2">{data.pageOne.title2}</p>
                    <p className="home_title3">{data.pageOne.title3}</p>
                </div>

                <div className="Home HomePage_2">
                    <div className="page2_left">
                        <h1>{data.pageTwo.heading}</h1>
                        <div className="HomePageNews">
                            <h2>{data.pageTwo.news[this.state.pageTwoChoose].heading}</h2>
                            <p>{data.pageTwo.news[this.state.pageTwoChoose].info}</p>
                        </div>
                        <ViewMore
                            data={btn}
                            handlerMouseOver={this.handlerMouseOver}
                            handlerClick={this.handlerClick}/>
                        <img src={this.state.news.imgSrc}/>
                    </div>
                    <div className="page2_right">
                        <NewsSideNav data={data.pageTwo.sideBar} sideNavClick={this.sideNavClick}/>
                    </div>
                </div>

                <div className="Home HomePage_3">
                    <div className="page3_left">
                        <h1>{data.pageThree.heading}</h1>
                        <p>{data.pageThree.info}</p>
                        <div className="industryChoose">
                            <div className="police"></div>
                            <div className="aviation"></div>
                            <div className="smartCity"></div>
                            <div className="industryChooseIcon">AVIATION</div>
                        </div>
                    </div>
                    <div className="page3news">
                        <p>{data.pageThree.news}</p>
                        <ViewMore                             
                            data={btn2}
                            handlerMouseOver={this.handlerMouseOver}
                            handlerClick={this.handlerClick}/>
                    </div>
                    <img className="page3_right" src="/public/images/page3_right.png" />
                </div>

                <div className="Home HomePage_4">
                    <div className="page4Header">
                        <h1>{data.pageFour.heading}</h1>
                        <p>{data.pageFour.info}</p>
                    </div>
                    <ImagesSilde />
                </div>

                <div className="Home HomePage_5">
                    <div className="page5_left">
                        <h1>City Partner</h1>
                        <p>111</p>
                        <ViewMore
                            data={btn}
                            handlerMouseOver={this.handlerMouseOver}
                            handlerClick={this.handlerClick}/>
                    </div>
                    <div className="page5_right">
                        <img src="/public/images/page5right.png" />
                    </div>
                </div>

                <div className="Home HomePage_6">
                    <div className="page6Header">
                        <h1>{data.pageSix.heading}</h1>
                        {data.pageSix.info.map((d, i) => <p key={i}>{d}</p>)}
                    </div>
                    <footer className="Home_footer">
                        {data.pageSix.footer.map(d => {
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

            </div>
        );
    }
}

export default Home;
