import classes from './PageContent.module.css';

import makeClassNames from "../../utils/makeClassNames";

function PageContent({ title, children, className }) {
    const wrapperClasses = makeClassNames({
        [classes.content]: true,
        [className]: className,
    });

    return (
        <div className={wrapperClasses}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;
