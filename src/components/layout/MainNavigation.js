import { NavLink } from 'react-router-dom';
import { MdOutlinePets } from 'react-icons/md';

import classes from './MainNavigation.module.css';

const Navigation = () => {
  const navItemClasses = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={navItemClasses} end>
              <MdOutlinePets /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/documentation' className={navItemClasses}>
              Components
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
