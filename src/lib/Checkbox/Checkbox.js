import React, { useState } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";

import classes from './Checkbox.module.css';

const Checkbox = React.forwardRef(
    (props, ref) => {
        const { disabled, id, name, required, value, error } =
            props;

        const [checked, setChecked] = useState(props.checked);
        const [indeterminate, setIndeterminate] = useState(props.indeterminate);

        const handleChange = (e) => {
            setChecked((prevChecked) => !prevChecked);
            setIndeterminate(false);

            if (props.onChange) {
                props.onChange(e);
            }
        };

        const wrapperClasses = [
            classes.wrapper,
            props.className,
        ].filter(Boolean).join(' ')
        
        const controlClasses = [
            classes.control,
            (checked || indeterminate) && classes.hasMark,
            (disabled) && classes.disabled,
            (required) && classes.required,
            (error) && classes.error,
        ].filter(Boolean).join(' ')

        const labelClasses = [
            classes.label,
            (disabled) && classes.disabled,
            (error) && classes.error,
        ].filter(Boolean).join(' ')
        
        return (
            <div className={wrapperClasses}>
                <input className={classes.input}
                    ref={ref}
                    type="checkbox"
                    name={name || id}
                    id={id}
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                    value={value}
                    aria-required={required}
                    aria-checked={indeterminate ? "mixed" : undefined}
                />
                <div className={controlClasses}>
                    <span aria-hidden="true">
                        {checked && <FiCheck />}
                        {indeterminate && <FiMinus />}
                    </span>
                </div>
                <div className={labelClasses}>
                    <label htmlFor={id}>{props.children}</label>
                </div>
            </div>
        );
    }
);

export default Checkbox;
