/**
* @Author: haiwang
* @Date:   2017-03-01 15:36:20
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-01 16:02:26
*/



import React from 'react';

class NewsSideNav extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            value: 'companyNews'
        }
        this.handlerClick = this.handlerClick.bind(this);

    }
    handlerClick(e) {

        const dom = e.currentTarget;
        const value = dom.getAttribute('data-id');
        this.setState({
            value: value
        });
       
        if(this.props.sideNavClick) {

            this.props.sideNavClick(value);

        }

    }
    renderNavItems(config) {

        return config.map(d => {
            return (
                <div 
                    className={'sideBarNews' + (this.state.value === d.id ? ' chooseNews': '')}
                    key={d.id} 
                    onClick={this.handlerClick} 
                    data-id={d.id}>
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

        const config = this.props.data;

        return (
            <div className='NewsSideNav'>
                {this.renderNavItems(config)}
            </div>
        )
    }
}

export default NewsSideNav;
