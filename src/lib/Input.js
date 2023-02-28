import React, { useState } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e) => {
        if (e.target.value !== '') {
            setHasValue(true);
        }

        props.onChange(e);
    }

    return (
        <div
            className={`${classes.control} ${props.error && classes.invalid} ${hasValue && classes['has-value']}`}
        >
            <input
                ref={ref}
                id={props.id}
                name={props.name}
                type={props.type}
                onChange={handleChange}
                onBlur={props.onBlur}
            />
            <span className={classes.bar}></span>
            <label htmlFor={props.id}>{props.label}</label>
            {props.error && (
                <div className={`${classes['helper-text']} ${props.error && classes.invalid}`}>
                    {props.error} 
                </div>
            )}
            {props.description && (
                <div className={classes['helper-text']}>
                    {props.description} 
                </div>
            )}
        </div>
    );
});

export default Input;
