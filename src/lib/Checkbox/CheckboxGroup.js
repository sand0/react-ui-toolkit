import React from 'react';

import makeClassNames from '../../utils/makeClassNames';

import classes from './CheckboxGroup.module.css';

const CheckboxGroup = (props) => {
  const {
    name,
    description,
    legendLabel,
    errorMessage,
    variant = 'column',
  } = props;

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
        <div className={classes.title}>
          <span>{legendLabel || name}</span>
        </div>
        {description && (
          <div className={classes.description}>
            <span>{description}</span>
          </div>
        )}
      </legend>
      {errorMessage && <span className={errorClasses}>{errorMessage}</span>}
      <div className={childrenClasses}>{props.children}</div>
    </fieldset>
  );
};

export default CheckboxGroup;
