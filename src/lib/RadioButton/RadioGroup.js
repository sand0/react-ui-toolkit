import React, { useState } from "react";

import {RadioGroupProvider} from "./RadioGroupContext";
import classes from "./RadioGroup.module.css";

const RadioGroup = (props) => {
    const { name, description, legendLabel, errorMessage, value, onChange } = props;
    
    const [selected, setSelected] = useState(value);
    const handleChange = (e) => {
        setSelected(e.target.value)
        onChange && onChange(e.target.value);
    }
    
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
                {description && <p className={descriptionClasses}>{description}</p>}
            </legend>
            {errorMessage && <p className={errorClasses}>{errorMessage}</p>}
            <RadioGroupProvider
                onChange={handleChange}
                name={name} 
                selected={selected}
            >
                {props.children}
            </RadioGroupProvider>
        </fieldset>
    );
};

export default RadioGroup;
