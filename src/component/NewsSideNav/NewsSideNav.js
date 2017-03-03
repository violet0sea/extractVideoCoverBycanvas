/**
* @Author: haiwang
* @Date:   2017-03-01 15:36:20
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-01 16:02:26
*/



import React from 'react';
const config = [
    {
        id: 'companyNews',
        value: 'COMPANY NEWS',
        imgSrc: '/public/images/sideBarIcon1.png'
    },
    {
        id: 'mediaReports',
        value: 'MEDIA REPORTS',
        imgSrc: '/public/images/sideBarIcon2.png'
    },
    {
        id: 'industryNews',
        value: 'INDUSTRY NEWS',
        imgSrc: '/public/images/sideBarIcon3.png'
    }
]
class NewsSideNav extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);

    }
    handlerClick(e) {

        const dom = e.currentTarget;
        const value = dom.getAttribute('data-id');
       
        if(this.props.sideNavClick) {

            this.props.sideNavClick(value);

        }


    }
    renderNavItems(config) {

        return config.map(d => {
            return (
                <div key={d.id} onClick={this.handlerClick} data-id={d.id}>
                    <span>
                    {d.value.split(' ').map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                    </span>
                    <img src={d.imgSrc} />
                </div>
            )
        })
    }
    render() {

        return (
            <div className='NewsSideNav'>
                {this.renderNavItems(config)}
            </div>
        )
    }
}

export default NewsSideNav;
