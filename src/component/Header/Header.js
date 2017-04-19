import React from 'react';
import Nav from '../../component/Nav/Nav';
import dataConfig from './dataConfig';
import './Header.scss';

class Header extends React.Component {
    render() {

        return (
            <div className="Header">
                <img className="logo" src="/public/images/hylogo.png"></img>
                <Nav data={dataConfig} />
            </div>
        )
    }
}

export default Header;