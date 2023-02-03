import React, { useContext } from "react";
import { FiCircle } from "react-icons/fi";
import RadioGroupContext from "./RadioGroupContext";

import classes from './RadioButton.module.css';

const RadioButton = React.forwardRef(
    (props, ref) => {
        const { disabled, id, name, value, error } =
            props;
        
        const context = useContext(RadioGroupContext);
        
        const checked = value === context.selected;

        const wrapperClasses = [
            classes.wrapper,
            props.className,
        ].filter(Boolean).join(' ')
        
        const controlClasses = [
            classes.control,
            (checked) && classes.checked,
            (disabled) && classes.disabled,
            (error) && classes.error,
        ].filter(Boolean).join(' ')

        const labelClasses = [
            classes.label,
            (disabled) && classes.disabled,
            (error) && classes.error,
        ].filter(Boolean).join(' ')

        
        return (
            <div className={wrapperClasses}>
                <input
                    className={classes.input}
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={context.onChange}
                    disabled={disabled}
                    ref={ref}
                />
                <div className={controlClasses}>
                    <span aria-hidden="true">
                        {checked && <FiCircle />}
                    </span>
                </div>
                <div className={labelClasses}>
                    <label htmlFor={id}>{props.children}</label>
                </div>
            </div>
        );
    }
);

export default RadioButton;
