import React, { useEffect, useState } from 'react';

import makeClassNames from '../../utils/makeClassNames';
import { RadioGroupProvider } from './RadioGroupContext';

import classes from './RadioGroup.module.css';

const RadioGroup = (props) => {
  const {
    name,
    description,
    legendLabel,
    errorMessage,
    value,
    variant = 'column',
  } = props;

  const [selected, setSelected] = useState(value);
  const handleChange = (e) => {
    setSelected(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

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
  });

  return (
    <fieldset name={name} className={groupClasses}>
      <legend className={classes.legend}>
        <p className={classes.title}>{legendLabel || name}</p>
        {description && <p className={classes.description}>{description}</p>}
      </legend>
      {errorMessage && <p className={errorClasses}>{errorMessage}</p>}
      <RadioGroupProvider
        onChange={handleChange}
        name={name}
        selected={selected}
      >
        <div className={childrenClasses}>{props.children}</div>
      </RadioGroupProvider>
    </fieldset>
  );
};

export default RadioGroup;
