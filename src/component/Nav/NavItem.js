import React from 'react';
import { Link } from 'react-router';

function NavItem(props) {
    return(
        <li>
            <Link to={`/${props.data.id === 'home' ? '' : props.data.id}`}>
                {props.data.name}
            </Link>
        </li>
    );
}

export default NavItem;