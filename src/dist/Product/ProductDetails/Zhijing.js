import React from 'react';

class Product extends React.Component {
    constructor() {
        super();

    }
    render() {

        return (
            <div>
                <section className='productPage pageTwo'>
                    <header><img src='/public/images/productZhijing.png' /></header>
                    <div className='pdt_pto_content'>
                        <div className='pdt_pto_contentDetail pdt_pto_content_left'>
                            <img src='/public/images/zhijingNews.png' />
                        </div>
                        <div className='pdt_pto_contentDetail pdt_pto_content_right'>
                            <div className='diva'><span>ABOUT</span><span className='redcolor'>IPS</span></div>
                            <div className='divaDescription'>
                                <p>In the era of big data, police data is regarded as the public security system in the largest and the most valuable asset. At present, the public security system is still waiting for more than 80% of the data processing, more than 90% of the data value for mining. In the public security system, policy makers should not only solve the police of the great amount of data, complex and difficult to understand the problem, but also to solve the problem of application of valid data is scarce.</p>
                                <p>When running huge amounts of data, the public security command found that decision makers in the make a comprehensive analysis and situation of emergency is difficult to grasp the relationship between police data as well as its authenticity. To build up a bridge between the command layer and data layer, to solve the domestic police less data applications, data analysis tools complex pain points, the cloud data independent research and development the intellectual p big data visual command decision-making platform - IPS.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='productPage pageThree' style={{backgroundImage: `url('/public/images/productZhijingPage3.png')`}}>
                    <p className='zhijing'>Intellectual p big data platform will be the case, the police, monitoring, visual analysis and decision, bayonet, population source, road conditions and a series of related data access to space and time dimension, implements the early-warning three-dimensional, multidimensional visual analysis of big data. Through the wisdom of police, public security departments to real-time control the related information data of different time, different place, effectively improve "prior warning, and to matter command, afterwards" ability, assist the public security decisions. When breaking case, p can present case from happening, and monitoring to the whole process of processing. Policy makers can be according to the arrangement of monitoring, bayonet, roads, police force and a series of intelligence, the depth of the correlation analysis results real-time transfer case police around, fast response, control of the case.</p>
                </section>
                <section className='productPage pageLast'>
                    <p className='zhijing'>IPS big data visual command decision-making platform is divided into seven modules, respectively, in 110, great intelligence, forensic, made investigation, economic, physical evidence, Internet surveillance, communication, fire control, transportation, policing management, and other areas of the business, implement the data values fall to the ground.</p>
                    {this.props.children}
                </section>
            </div>          
        );
    }
}

export default Product;