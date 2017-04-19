import React from 'react';

class Product extends React.Component {
    constructor() {
        super();

    }
    render() {

        return (
            <div>
                <section className='productPage pageTwo'>
                    <header><img src='/public/images/productTueasyHub.png' /></header>
                    <div className='pdt_pto_content'>
                        <div className='pdt_pto_contentDetail pdt_pto_content_left'>
                            <img src='/public/images/tueasyHubNews.png' />
                        </div>
                        <div className='pdt_pto_contentDetail pdt_pto_content_right'>
                            <div className='diva'><span>ABOUT</span><br /><span className='redcolor tueasyHubTitle'>TUEAYHUB</span></div>
                            <div className='divaDescription'>
                                <p>TE Hub for terminal customers decision command demo scenario, pursuing high quality figure easily visualization arises at the historic moment. Figure is the Hub is divided into two dimensions 65 inches and 84 inches, is 4 k standard resolution and the display of the machine with high configuration of the CPU, large capacity, high speed top memory, display card, can guarantee figure easily run clear and smooth, cool. Multi-touch, keyboard operation, meet the needs of the client meeting occasions demo.</p>
                                <p>TE Hub can be used to command the monitoring center, intelligence analysis center, presentations, reports, and other people demo scenario. Level 4 k time for figure hd cool perfect deduce easily, make the meeting content wonderful presents. High sensitive multi-touch satisfy people operate together, meet what touch is what you get instant interactive experience.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='productPage pageThree' style={{backgroundImage: `url('/public/images/productionTueasyHubPage3.png')`}}>
                    <div className='tueasyHubProduction'>
                        <div className='tueasyHubFeature'><span>PRODUCT</span><span className='redcolor'>FEATURE</span></div>
                            <div className='tueasyHubDescrption'>
                                <h2>PERFECT 4K HD DISPLAY EFFECT</h2>
                                <p>Figure is a Hub with 4 k standard 3840 * 2160 resolution high-definition perfect display ability, can to show the real figure is the product of hd cool effect, more clearly highlight the expression ability of data. 65 inches and 84 inches of big screen meet the conference room, hall, and other people show scene command, make the meeting show effect of demonstration figure easily.</p>
                            </div>
                    </div>
                </section>
                <section className='productPage pageLast'>
                    <div className='tueasyHub'>
                        <h1>CUSTOMER VALUE</h1>
                        <h2>TUEASY VISUALIZATION COOL EFFECT</h2>
                        <p>TUEASY Hub perfect present figure cool effect and interactive visualization products, improve the running speed of graph data to show that helps to show picture data to express the relationship, latitude and regularity, graph data to show the effect optimization.</p>
                        <h2>MULTI-USAGE, WISE INVESTMENT</h2>
                        <p>TUEASY Hub for figure show not only the product easily, its itself is high configuration screen display all-in-one. Support video recording and audio transmission, which can be used in local or remote communication, is the modern office, conference room necessary</p>
                    </div>
                    {this.props.children}
                </section>
            </div>          
        );
    }
}

export default Product;