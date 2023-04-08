import DocumentationNavigation from './DocumentationNavigation';

import { Outlet } from 'react-router-dom';

import classes from "./DocumentationLayout.module.css"

const DocumentationLayout = () => {
    return (
        <div className={classes.container}>
            <div className={classes.menuWrapper}>
                <DocumentationNavigation />
            </div>
            <div className={classes.exampleWrapper}>
                <Outlet />
            </div>
        </div>
    );
}

export default DocumentationLayout;
