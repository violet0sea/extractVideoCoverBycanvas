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
        imgSrc: ''
    },
    {
        id: 'mediaReports',
        value: 'MEDIA REPORTS',
        imgSrc: ''
    },
    {
        id: 'industryNews',
        value: 'INDUSTRY NEWS',
        imgSrc: ''
    }
]
class NewsSideNav extends React.Component {
    constructor(props) {
        super(props);

    }
    renderNavItems(config) {

        return config.map(d => {
            return (
                <div key={d.id}>
                    <span>
                    {d.value.split(' ').map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                    </span>
                    <img src='/public/images/s.png' />
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
