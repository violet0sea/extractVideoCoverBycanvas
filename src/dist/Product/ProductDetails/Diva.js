import React from 'react';

class Product extends React.Component {
    constructor() {
        super();

    }
    render() {

        return (
            <div>
                <section className='productPage pageTwo'>
                    <header><img src='/public/images/diva.png' /></header>
                    <div className='pdt_pto_content'>
                        <div className='pdt_pto_contentDetail pdt_pto_content_left'>
                            <img src='/public/images/divaNews.png' />
                        </div>
                        <div className='pdt_pto_contentDetail pdt_pto_content_right'>
                            <div className='diva'><span>ABOUT</span><span className='redcolor'>DIVA</span></div>
                            <div className='divaDescription'>
                                <p>Aviation industry, the industry attributes lead to produce large amounts of data, and formed a huge system of human resources, the challenge for management is very big. Therefore, the management of the aviation industry need a large data visual analysis tools, to be more flexible, more agile resource management.</p>
                                <p>Many airlines management when they make a decision very carefully. Because, on the policy makers, social phenomena, a decimal point changes, an algorithm is not accurate, is likely to lead to hundreds of millions of money, either increase or decrease.</p>
                                <p>Although some companies have to part of the structure of the existing data analysis and use the result to operational and strategic planning. But many companies are still unable to more professional to create a more comprehensive, more clear analysis system.</p>         
                            </div>
                        </div>
                    </div>
                </section>
                <section className='productPage pageLast'>
                    <p className='zhijing'>Intellectual p big data platform will be the case, the police, monitoring, visual analysis and decision, bayonet, population source, road conditions and a series of related data access to space and time dimension, implements the early-warning three-dimensional, multidimensional visual analysis of big data. Through the wisdom of police, public security departments to real-time control the related information data of different time, different place, effectively improve "prior warning, and to matter command, afterwards" ability, assist the public security decisions. When breaking case, p can present case from happening, and monitoring to the whole process of processing. Policy makers can be according to the arrangement of monitoring, bayonet, roads, police force and a series of intelligence, the depth of the correlation analysis results real-time transfer case police around, fast response, control of the case.</p>
                    {this.props.children}
                </section>
            </div>          
        );
    }
}

export default Product;