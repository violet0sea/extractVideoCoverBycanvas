import React from 'react';
import NavItem from './NavItem';

class Nav extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            data: props.data
        };

    }
    render() {

        const state = this.state;
        const { data } = state;

        return (
            <div className="Nav">
                <ul>
                {data.map(d => <NavItem key={d.id} data={d} />)}
                </ul>
            </div>
        )
    }
}

export default Nav;