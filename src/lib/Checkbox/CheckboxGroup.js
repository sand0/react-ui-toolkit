import React from "react";

import classes from "./CheckboxGroup.module.css";

const CheckboxGroup = (props) => {
    const {name, description, legendLabel, errorMessage} = props;
    
    const groupClasses = [
        classes.group,
        props.className,
    ].filter(Boolean).join(' ')
    
    const descriptionClasses = [
        classes.description
    ].filter(Boolean).join(' ')
    
    const errorClasses = [
        classes.description,
        classes.error
    ].filter(Boolean).join(' ')

    return (
        <fieldset name={name} className={groupClasses}>
            <legend className={classes.legend}>
                <p className={classes.title}>{legendLabel || name}</p>
                {description && (
                    <p className={descriptionClasses}>{description}</p>
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
