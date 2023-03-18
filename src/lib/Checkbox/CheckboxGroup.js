import React from "react";

import makeClassNames from "../../utils/makeClassNames";

import classes from "./CheckboxGroup.module.css";

const CheckboxGroup = (props) => {
    const {name, description, legendLabel, errorMessage, variant = 'column'} = props;
    
    const groupClasses = makeClassNames({
        [classes.group]: true,
        [props.className]: props.className,
    });

    const errorClasses = makeClassNames({
        [classes.description]: true,
        [classes.error]: true,
    }); 

    const childrenClasses = makeClassNames({
        [classes.children]: true,
        [classes.flexRow]: variant === 'row',
        [classes.flexColumn]: variant === 'column',
    })

    return (
        <fieldset name={name} className={groupClasses}>
            <legend className={classes.legend}>
                <p className={classes.title}>{legendLabel || name}</p>
                {description && (
                    <p className={classes.description}>{description}</p>
                )}
            </legend>
            {errorMessage && (
                <p className={errorClasses}>{errorMessage}</p>
            )}
            <div className={childrenClasses}>{props.children}</div>
        </fieldset>
    );
};

export default CheckboxGroup;
