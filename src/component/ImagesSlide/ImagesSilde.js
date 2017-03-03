/**
* @Author: haiwang
* @Date:   2017-03-01 16:30:39
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-02 14:04:29
*/



import React from 'react';
import './ImagesSlide.scss';
const config = [
    {
        id: 'image1',
        imgSrc: '/public/images/slideImage.png',
        itemIndex: 0
    },
    {
        id: 'image2',
        imgSrc: '/public/images/homePage.png',
        itemIndex: 1
    },
    {
        id: 'image3',
        imgSrc: '/public/images/homePage2.png',
        itemIndex: 2
    },
    {
        id: 'image4',
        imgSrc: '/public/images/homePage3.png',
        itemIndex: 3
    },
    {
        id: 'image5',
        imgSrc: '/public/images/homePage4.png',
        itemIndex: 4
    }
]

class ImagesSilde extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            selected: 1,
            leftClick: true
        };

        this.timer = null;
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerMouseOver = this.handlerMouseOver.bind(this);
        this.handlerMouseOut = this.handlerMouseOut.bind(this);

    }
    handlerClick(e) {

        const dom = e.target;
        const id = parseInt(dom.getAttribute('data-value'));
        const index = parseInt(dom.getAttribute('data-index'));

        if(index === 0) {

            const popValue = config.pop();
            config.unshift(popValue);

        }
        if(index === 1) {

            return false;

        }
        if(index === 2) {

            // 右侧点击
            const shiftValue = config.shift();
            config.push(shiftValue);

        }
        this.setState({
            selected: id,
            leftClick: index === 2 ? false : true
        });

    }
    handlerMouseOver() {

        clearInterval(this.timer);
        this.timer = null;

    }
    handlerMouseOut() {

        this.autoPlay();

    }
    componentDidMount() {

        this.autoPlay();

    }
    autoPlay() {

        const timerID = setInterval(() => {

            const rightDom = document.querySelectorAll('.showSide')[1];
            rightDom.click();

        }, 3000);

        this.timer = timerID;

    }
    componentWillUpdate() {

        // 由于imageSilde组件只渲染了三个img标签，在点击切换时需要做一个消亡动画， here it is
        if(this.state.leftClick === false) {

            const dom = document.querySelector('.showSide');
            const cloneNode = dom.cloneNode();
            cloneNode.className += ' rightAnimationDisappear';
            dom.parentNode.appendChild(cloneNode);
            dom.className += ' rightAnimationDisappear';
            setTimeout(() => {

                cloneNode.parentNode.removeChild(cloneNode);

            }, 3000);

        } else {

            const dom = document.querySelectorAll('.showSide')[1];
            const cloneNode = dom.cloneNode();
            cloneNode.className += ' leftAnimationDisappear';
            dom.parentNode.appendChild(cloneNode);
            setTimeout(() => {

                cloneNode.parentNode.removeChild(cloneNode);

            }, 3000);
        }


    }
    componentWillUnmount() {

        if(this.timer) {

            clearInterval(this.timer);
            
        }
    }
    renderImages(config) {

        const maxLength = config.length;
        const selected = this.state.selected;
        let returnArr = [];

        for(let i = 0; i < 3; i++) {

            returnArr.push(
                <img
                    key={config[i]['id']}
                    className={(i === 1 ? 'showMiddle' : 'showSide') + (this.state.leftClick ? ' leftAnimation' : ' rightAnimation')}
                    src={config[i]['imgSrc']}
                    data-value={config[i]['itemIndex']}
                    data-index={i}
                    onClick={this.handlerClick}
                    onMouseOver={this.handlerMouseOver}
                    onMouseOut={this.handlerMouseOut}
                />
            );

        }

        return returnArr;

    }

    render() {

        return (
            <div className="ImagesSilde">
                {this.renderImages(config)}
            </div>
        );

    }
}

export default ImagesSilde;
