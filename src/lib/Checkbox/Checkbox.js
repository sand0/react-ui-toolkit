import React, { useEffect, useState } from 'react';
import { FiCheck, FiMinus } from 'react-icons/fi';

import makeClassNames from '../../utils/makeClassNames';

import classes from './Checkbox.module.css';

const Checkbox = React.forwardRef((props, ref) => {
  const { disabled, id, name, required, value, error } = props;

  const [checked, setChecked] = useState(props.checked);
  const [indeterminate, setIndeterminate] = useState(props.indeterminate);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  useEffect(() => {
    setIndeterminate(props.indeterminate);
  }, [props.indeterminate]);

  const handleChange = (e) => {
    setChecked((prevChecked) => !prevChecked);
    setIndeterminate(false);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  const wrapperClasses = makeClassNames({
    [classes.wrapper]: true,
    [props.className]: props.className,
  });

  const controlClasses = makeClassNames({
    [classes.control]: true,
    [classes.hasMark]: checked || indeterminate,
    [classes.disabled]: disabled,
    [classes.error]: error,
  });

  const labelClasses = makeClassNames({
    [classes.label]: true,
    [classes.disabled]: disabled,
    [classes.error]: error,
  });

  return (
    <div className={wrapperClasses}>
      <input
        className={classes.input}
        ref={ref}
        type='checkbox'
        name={name || id}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        aria-required={required}
        aria-checked={indeterminate ? 'mixed' : undefined}
      />
      <div className={controlClasses}>
        <span aria-hidden='true'>
          {checked && <FiCheck />}
          {indeterminate && <FiMinus />}
        </span>
      </div>
      <div className={labelClasses}>
        <label htmlFor={id}>{props.children}</label>
      </div>
    </div>
  );
});

export default Checkbox;
