import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Diva, TueasyHub, Zhijing } from './ProductDetails';
import Footer from '../../component/Footer/Footer';
import SlideButton from '../../component/SlideButton/SlideButton';
import './Product.scss';
import productData from './productData';
const data = [
    {
        id: 'Home_infos',
        heading: 'INFOS',
        p: [
            'Address: 17F, Block B,Silver Network',
            'Center, No.113 Zhichun Road, Haidian District, Beijing',
            'Email： info@hiynn.com',
            'Telephone： 010-82253877',
            'QQ: 1836060571'
        ]
    },
    {
        id: 'Home_followus',
        heading: 'FOLLOW US',
        p: [
            'Weibo',
            'Weixin',
            'Facebook'
        ] 
    },
    {
        id: 'Home_joinus',
        heading: 'JOIN US',
        p: ['HYDATA sincerely look forward to join in us?']
    }
]

const product = new Map([
    ['Zhijing', Zhijing],
    ['Diva', Diva],
    ['TueasyHub', TueasyHub]
]);

class Product extends React.Component {
    constructor() {

        super();
        this.state={
            chooseImg: 'Zhijing',
            pageIndex: 0
        };
        this.changeImgSrc = this.changeImgSrc.bind(this);
        this.buttonForUp = this.buttonForUp.bind(this);
        this.buttonForDown = this.buttonForDown.bind(this);
        this.timeFlag = true;
        this.pageHeight = 0;
        this.pageIndex = 0;

    }
    componentDidMount() {
        console.log(this.pageIndex)
        document.body.addEventListener('wheel', wheelHandler);
        window.addEventListener('resize', () => {

            const height = (window.screen.width > 1366 ? 1015 : 703);
            this.pageHeight = height;

        });
        const that = this;
        this.pageHeight = document.querySelector('.productPage').offsetHeight;

        function wheelHandler(e) {

            const down = e.deltaY > 0 ? true : false;
 
            if(down) {

                that.buttonForDown();

            } else {

                that.buttonForUp();

            }

        }
        this.wheelHandler = wheelHandler;

        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const freshIndex = Math.round(scrollTop / this.pageHeight);

        if(freshIndex !==0) {

            this.pageIndex = freshIndex;
        }

    }
    componentDidUpdate() {

        this.pageHeight = document.querySelector('.productPage').offsetHeight;

    }
    componentWillUnmount() {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.removeEventListener('wheel', this.wheelHandler);

    }
    changeImgSrc(e) {

        e.stopPropagation();
        const dom = e.target;
        const value = dom.getAttribute('data-value');

        if(dom.nodeName === 'LI' && product.has(value)) {

            this.setState({
                chooseImg: value,
                pageIndex: 1
            });

            this.buttonForDown();
            
        }
        
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
        });
        
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
        const pageSum = document.querySelector('.Product').offsetHeight / this.pageHeight - 1;
        if(this.pageIndex > pageSum) {

            this.pageIndex = pageSum;
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

            if((document.body.scrollTop || document.documentElement.scrollTop) < that.pageIndex *  that.pageHeight) {

                requestAnimationFrame(handler);

            }

        }

    }
    render() {

        const { chooseImg } = this.state;
        const Production = product.get(chooseImg);


        return (
            <div className='Product'>
                <SlideButton                     
                    buttonForUp={this.buttonForUp}
                    buttonForDown={this.buttonForDown}
                />
                <section className='productPage pageOne'>
                        <h1>TE ECOLOGICAL PLATFORM</h1>
                        <p>HYDATA launch figure data to big decision of product ecological platform, can provide complete one-stop integrated solution for large data, assist each person, enterprise, park, city, the government to complete the reconstruction of the brain. At the same time, through the study of intelligent data, depth, establish visual analysis application under different business scenarios, cooperate with the figure easily analysis of cloud, data bank, and the variety of combination of AR technology products, complete links between the brain. "</p>
                        <div className='productList'>
                            <ul onClick={this.changeImgSrc}>
                                {productData.map(d => {
                                    const imgsrc = d.value === chooseImg ? "url('/public/images/productListFocus.png')" : "url('/public/images/productList.png')";
                                    return <li key={d.id} data-value={d.value} style={{backgroundImage: imgsrc}}></li>
                                })}
                            </ul>
                        </div>
                </section>
                <Production>
                    <Footer data={data}/>
                </Production>

            </div>            
        );

    }
}

const mapStateToProps = (state) => {
    return {
        navItem: state.changeInitialNews.value
    }

};

export default connect(mapStateToProps)(Product);
