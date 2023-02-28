import { NavLink } from "react-router-dom";

import classes from './Navigation.module.css';

const Navigation = (props) => {

    const activeClassNames = 'active';
    const getLinkClassNames = ({ isActive }) => isActive ? activeClassNames : classes.link
    return (
        <nav className={classes}>
            <ul>
                <li>
                    <NavLink 
                        to="/"
                        className={getLinkClassNames}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/demo"
                        className={getLinkClassNames}
                    >
                        Demo
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
