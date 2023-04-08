import { useState } from 'react';

import LivePlayground from '../documentation/LivePlayground';

import Checkbox from '../../lib/Checkbox/Checkbox';
import CheckboxGroup from '../../lib/Checkbox/CheckboxGroup';
import RadioGroup from '../../lib/RadioButton/RadioGroup';
import RadioButton from '../../lib/RadioButton/RadioButton';

const states = {
  checked: 'checked',
  unchecked: 'unchecked',
  indeterminate: 'indeterminate',
};

const stateToCheckedProp = (state) => {
  switch (state) {
    case states.checked:
      return true;

    case states.unchecked:
      return false;

    default:
      break;
  }
};

const CheckboxExample = () => {
  const [state, setState] = useState(states.unchecked);
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [error, setError] = useState(false);

  const handleDemoChange = (e) => {
    setState(e.target.checked ? states.checked : states.unchecked);
  };

  return (
    <LivePlayground
      controls={
        <>
          <RadioGroup
            legendLabel='State control'
            variant='row'
            value={state}
            onChange={(selected) => {
              setState(selected);
            }}
          >
            <RadioButton value={states.unchecked}>Unchecked</RadioButton>
            <RadioButton value={states.checked}>Checked</RadioButton>
            <RadioButton value={states.indeterminate}>
              Indeterminate
            </RadioButton>
          </RadioGroup>
          <CheckboxGroup legendLabel='Other props' variant='row'>
            <Checkbox
              checked={required}
              onChange={(e) => {
                setRequired(e.target.checked);
              }}
            >
              Required
            </Checkbox>
            <Checkbox
              checked={disabled}
              onChange={(e) => {
                setDisabled(e.target.checked);
              }}
            >
              Disabled
            </Checkbox>
            <Checkbox
              checked={error}
              onChange={(e) => {
                setError(e.target.checked);
              }}
            >
              Has an error
            </Checkbox>
          </CheckboxGroup>
        </>
      }
    >
      <Checkbox
        id='test-id'
        name='test-name'
        checked={stateToCheckedProp(state)}
        indeterminate={state === states.indeterminate}
        onChange={handleDemoChange}
        disabled={disabled}
        required={required}
        error={error}
      >
        {'Some label for checkbox'}
      </Checkbox>
    </LivePlayground>
  );
};

export default CheckboxExample;
