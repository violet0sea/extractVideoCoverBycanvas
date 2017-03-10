import React from 'react';
import IndustryIcon from './IndustryIcon';
import './Industry.scss';

const data = [
    {
        uid: 'icon1',
        name: 'POLICE',
        value: 'police',
        iconSrc: '/public/images/industryIcon1.png'
    },
    {
        uid: 'icon2',
        name: 'AVIATION',
        value: 'aviation',
        iconSrc: '/public/images/industryIcon2.png'
    },
    {
        uid: 'icon3',
        name: 'SMARTCITY',
        value: 'smartCity',
        iconSrc: '/public/images/industryIcon3.png'
    }
]

class IndustryNav extends React.Component {
    constructor(props) {

        super();
        this.state = {

        };
        this.iconClick = this.iconClick.bind(this);

    }
    iconClick(e) {

        console.log('ccccccccc', e)

    }
    renderIndustryIcon(data) {
        console.log(data)
        return (data.map(d => {
            return <IndustryIcon key={d.uid} data={d} iconClick={this.iconClick}/>
        }));
    }
    render() {

        return (
            <div className='IndustryNav' style={{position: 'absolute', left: '100px', top: '100px', width: '150px', height: '150px'}}>
                {this.renderIndustryIcon(data)}
            </div>
        );

    }
}

export default IndustryNav;