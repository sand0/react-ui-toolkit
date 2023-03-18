import { NavLink } from 'react-router-dom';

import classes from './DemoNavigation.module.css';

const MenuItem = ({ to, text }) => {
    const menuItemClasses = ({ isActive }) => isActive ? classes.active : undefined;

    return (
        <li>
            <NavLink
                to={to}
                className={menuItemClasses}
            >
                {text}
            </NavLink>
        </li>
    )
}

const DemoNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <MenuItem to='checkbox' text='Checkbox' />
                    <MenuItem to='radio' text='Radio' />
                </ul>
            </nav>
        </header>
    );
}

export default DemoNavigation;
