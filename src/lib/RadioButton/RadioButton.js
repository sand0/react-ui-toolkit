import React, { useContext } from 'react';
import { FiCircle } from 'react-icons/fi';

import makeClassNames from '../../utils/makeClassNames';
import RadioGroupContext from './RadioGroupContext';

import classes from './RadioButton.module.css';

const RadioButton = React.forwardRef((props, ref) => {
  const { disabled, id, name, value, error } = props;

  const context = useContext(RadioGroupContext);

  const checked = value === context.selected;

  const wrapperClasses = makeClassNames({
    [classes.wrapper]: true,
    [props.className]: props.className,
  });

  const controlClasses = makeClassNames({
    [classes.control]: true,
    [classes.checked]: checked,
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
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={context.onChange}
        disabled={disabled}
        ref={ref}
      />
      <div className={controlClasses}>
        <span aria-hidden='true'>{checked && <FiCircle />}</span>
      </div>
      <div className={labelClasses}>
        <label htmlFor={id}>{props.children}</label>
      </div>
    </div>
  );
});

export default RadioButton;
