/**
* @Author: haiwang
* @Date:   2017-02-28 11:08:57
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-02 14:11:37
*/



import React from 'react';
import ViewMore from '../../component/ViewMore/ViewMore';
import NewsSideNav from '../../component/NewsSideNav/NewsSideNav';
import ImagesSilde from '../../component/ImagesSlide/ImagesSilde';
import './Home.scss';
const btn = {
    style: {
        color: "white"
    },
    textContent: "ViewMore",
    value: "news"
}

class Home extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            news: {
                content: 'test text',
                imgSrc: '/public/images/newsImg.png'
            }
        };
        this.handlerClick=this.handlerClick.bind(this);

    }
    handlerClick(value) {

        //todo need a ajax and change route
        console.log('value', value)
    }
    render() {

        return (
            <div className="HomeContainer">
                <div className="Home HomePage_1">
                    <p className="home_title1">Making Enterprises Operate Big Data More Quickly and Flexibly</p>
                    <p className="home_title2">Today, everyone talks about Big Data,but it&apos;s unclear how it can help our works
    or how we can create more potential business value with it?</p>
                    <p className="home_title3">Operate Big Data With HYDATA</p>
                </div>
                <div className="Home HomePage_2">
                    <div className="page2_left">
                        <h1>NEWS</h1>
                        <div className="HomePage_new_1">
                        </div>
                        <ViewMore
                            data={btn}
                            handlerMouseOver={this.handlerMouseOver}
                            handlerClick={this.handlerClick}/>
                        <img src={this.state.news.imgSrc}/>
                    </div>
                    <div className="page2_right">
                        <NewsSideNav />
                    </div>
                </div>
                <div className="Home HomePage_3">

                </div>
                <div className="Home HomePage_4">
                    <div className="page4Header">
                        <h1>ECOLOGICAL PLATFORM</h1>
                        <p>Operational government department or large enterprise with national economic development leading unit, on the application of big data and the use of big data, are faced with how to effectively deal with vast and dense multi-source heterogeneous data of realistic problems. Due to the lack of big data effectively integrate software and hardware scheme, key node decision makers when making business decisions, often need to allocate a large number of resources for technical support, caused the height of the waste of manpower and money. Sea cloud data to the user point of thinking as the core, fully tap the user demand, dedicates the applicable to the industry and scene, have the comprehensive solution of the general ecological product platform - graph data to big decisions.</p>
                    </div>
                    <ImagesSilde />
                </div>
                <div className="Home HomePage_5">
                    <div className="page5_left">
                        City Partner
                        <ViewMore
                            data={btn}
                            handlerMouseOver={this.handlerMouseOver}
                            handlerClick={this.handlerClick}/>
                    </div>
                    <div className="page5_right">
                        picture
                    </div>
                </div>
                <div className="Home HomePage_6">
                    <div className="page6Header">
                        <h1>COMPANY INFORMATION</h1>
                        <p>Sea cloud data is the leader in the Chinese big data visual analysis, provide large enterprise overall operating data and analysis services, relying on the technology such as computer vision, data algorithm, explore the potential commercial value of big data, for different industries provide interactive visualization based on the data of the whole product, really realize the big data are applied to analysis, decision and anticipation.</p>
                        <p>Microsoft founder Bill Gates, li keqiang, China's premier has visited the enterprise, have positive evaluation on sea cloud data. When Bill Gates was visiting the sea cloud data, said: "HYDATA is a team full of passion. I like the Chinese embassy on treating data," prime minister li keqiang expectations: "I hope you continue to work hard, in the development of the economic data on the battlefield, is determined to continue and the commandos."</p>
                        <p>Today, sea cloud data already has offices in places such as Beijing, Shanghai, tianjin, has a world-class data visual analysis team, products are widely used by the world top 500 enterprises, and further promote the commercial application of big data visual analysis market space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
