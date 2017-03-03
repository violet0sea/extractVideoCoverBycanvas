import React from 'react';
import { Link } from 'react-router';

function NavItem(props) {
    return(
        <li>
            <Link to={`/${props.data.id}`}>
                {props.data.name}
                {props.data.children ? NavItem(props.data.children) : null}
            </Link>
        </li>
    );
}

export default NavItem;