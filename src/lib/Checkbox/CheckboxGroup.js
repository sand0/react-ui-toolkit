import React from "react";

import makeClassNames from "../../utils/makeClassNames";

import classes from "./CheckboxGroup.module.css";

const CheckboxGroup = (props) => {
    const {name, description, legendLabel, errorMessage} = props;
    
    const groupClasses = makeClassNames({
        [classes.group]: true,
        [props.className]: props.className,
    });

    const errorClasses = makeClassNames({
        [classes.description]: true,
        [classes.error]: true,
    }); 

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
            {props.children}
        </fieldset>
    );
};

export default CheckboxGroup;
