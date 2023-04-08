import React from 'react';

const defaultValues = {
  onChange: (e) => {},
  name: '',
  selected: null,
};

const RadioGroupContext = React.createContext(defaultValues);

export const RadioGroupProvider = (props) => {
  const { onChange, name, selected } = props;
  return (
    <RadioGroupContext.Provider value={{ onChange, name, selected }}>
      {props.children}
    </RadioGroupContext.Provider>
  );
};

export default RadioGroupContext;
