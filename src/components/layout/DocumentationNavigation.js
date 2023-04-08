import { NavLink } from 'react-router-dom';

import classes from './DocumentationNavigation.module.css';

import checkboxDoc from '../../pages/docs/checkbox.doc.json';

const MenuItem = ({ to, text }) => {
  const menuItemClasses = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <li>
      <NavLink to={to} className={menuItemClasses}>
        {text}
      </NavLink>
    </li>
  );
};

const DocumentationNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <MenuItem to={checkboxDoc.anchor} text={checkboxDoc.title} />
          <MenuItem to='random' text='This does not work!' />
        </ul>
      </nav>
    </header>
  );
};

export default DocumentationNavigation;
