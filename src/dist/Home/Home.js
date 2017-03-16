/**
* @Author: haiwang
* @Date:   2017-02-28 11:08:57
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-02 14:11:37
*/



import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../action/actionCreate';
import PageOne from './Subpage/PageOne';
import PageTwo from './Subpage/PageTwo';
import PageThree from './Subpage/PageThree';
import PageFour from './Subpage/PageFour';
import PageFive from './Subpage/PageFive';
import PageSix from './Subpage/PageSix';
import EnglishData from './englishData';
import ChineseData from './chineseData';
import './Home.scss';

class Home extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            news: {
                content: 'test text',
                imgSrc: '/public/images/page2newsImage.png'
            },
            industryChoose: 'aviation',
            pageIndex: 0

        };
        this.handlerClick = this.handlerClick.bind(this);
        this.sideNavClick = this.sideNavClick.bind(this);
        this.buttonForUp = this.buttonForUp.bind(this);
        this.buttonForDown = this.buttonForDown.bind(this);
        this.industryClick = this.industryClick.bind(this);
        this.pageIndex = 0;
        this.timeFlag = true;
        this.pageHeight = 0;
        this.cache = {};

    }

    componentDidMount() {

        document.body.addEventListener('wheel', wheelHandler);
        const that = this;
        this.pageHeight = document.querySelector('.Home').offsetHeight;
        function wheelHandler(e) {

            const down = e.deltaY > 0 ? true : false;
 
            if(down) {

                that.buttonForDown();

            } else {

                that.buttonForUp();

            }

        }

        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const freshIndex = Math.round(scrollTop / this.pageHeight);

        if(freshIndex !==0) {

            this.pageIndex = freshIndex;
        }

    }
    handlerClick(value) {

        //todo need a ajax and change route
        console.log('value', value);
        browserHistory.push('/' + value)

    }
    sideNavClick(value) {

        this.props.actions.changeInitialNewsType(value);

    }
    buttonForUp() {
        
        if(!this.timeFlag) {

            return;

        }

        this.timeFlag = false;
        setTimeout(() => {

            this.timeFlag = true;

        }, 800);

        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;


        if(this.pageIndex < 1) {

            return;

        }
        this.pageIndex -= 1;
        this.setState({
            pageIndex: this.pageIndex
        })
        const that = this;

        requestAnimationFrame(handler);

        function handler() {
       
            document.body.scrollTop -= 50;
            document.documentElement.scrollTop -= 50;

            if((document.body.scrollTop || document.documentElement.scrollTop) > (that.pageIndex *  that.pageHeight)) {

                requestAnimationFrame(handler);

            }

        }

    }    
    buttonForDown() {

        if(!this.timeFlag) {

            return;

        }

        this.timeFlag = false;
        setTimeout(() => {

            this.timeFlag = true;

        }, 800)
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        this.pageIndex += 1;
        this.setState({
            pageIndex: this.pageIndex
        })
        if(this.pageIndex > 5) {

            this.pageIndex = 5;
            return;

        }

        const that = this;
        requestAnimationFrame(handler);

        function handler() {

            document.body.scrollTop += 50;
            document.documentElement.scrollTop += 50;
            if((document.body.scrollTop || document.documentElement.scrollTop) > that.pageIndex *  that.pageHeight) {

                document.body.scrollTop = that.pageIndex *  that.pageHeight;
                document.documentElement.scrollTop = that.pageIndex *  that.pageHeight;

            }

            if(document.body.scrollTop || document.documentElement.scrollTop < that.pageIndex *  that.pageHeight) {

                requestAnimationFrame(handler);

            }

        }

    }
    industryClick(e) {

        const value = e.target.getAttribute('data-value');

        if(value) {

            this.setState({
                industryChoose: value
            });

        }

    }
    render() {

        const data = EnglishData;
        const initialNews = this.props.initialNews;
        const pageTwoChoose = this.props.pageTwoChoose;
        
        return (
            <div className="HomeContainer">
                <PageOne 
                    pageIndex={this.state.pageIndex}
                    data={data}
                    buttonForUp={this.buttonForUp}
                    buttonForDown={this.buttonForDown}
                />
                <PageTwo 
                    pageIndex={this.state.pageIndex}
                    news={this.state.news}
                    initialNews={initialNews}
                    pageTwoChoose={pageTwoChoose}
                    data={data}
                    sideNavClick={this.sideNavClick}
                    handlerMouseOver={this.handlerMouseOver}
                    handlerClick={this.handlerClick}
                />
                <PageThree
                    pageIndex={this.state.pageIndex}
                    industryChoose={this.state.industryChoose}
                    data={data}
                    initialNews={initialNews}
                    handlerMouseOver={this.handlerMouseOver}
                    handlerClick={this.handlerClick}
                    industryClick={this.industryClick}
                />
                <PageFour 
                    data={data}
                    pageIndex={this.state.pageIndex}
                />
                <PageFive 
                    pageIndex={this.state.pageIndex}
                    data={data}
                    handlerMouseOver={this.handlerMouseOver}
                    handlerClick={this.handlerClick}
                />
                <PageSix 
                    pageIndex={this.state.pageIndex}
                    data={data}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialNews: state.getInitialNews.initialNews,
        pageTwoChoose: state.changeInitialNews  
    }

};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(action, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
