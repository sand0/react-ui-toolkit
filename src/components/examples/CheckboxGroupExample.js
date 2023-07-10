import { useState } from 'react';
import LivePlayground from '../documentation/LivePlayground';

import RadioGroup from '../../lib/RadioButton/RadioGroup';
import RadioButton from '../../lib/RadioButton/RadioButton';
import CheckboxGroup from '../../lib/Checkbox/CheckboxGroup';
import Checkbox from '../../lib/Checkbox/Checkbox';

const variants = {
  column: 'column',
  row: 'row',
};

const CheckboxGroupExample = () => {
  const [variant, setVariant] = useState(variants.column);
  const [error, setError] = useState(false);

  return (
    <LivePlayground
      controls={
        <>
          <RadioGroup
            legendLabel='Variant control'
            variant='row'
            value={variant}
            onChange={(selected) => {
              setVariant(selected);
            }}
          >
            <RadioButton value={variants.column}>Column</RadioButton>
            <RadioButton value={variants.row}>Row</RadioButton>
          </RadioGroup>
          <CheckboxGroup legendLabel='Other props' variant='row'>
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
      <CheckboxGroup
        name={'Demo group'}
        description={'Some longer description text here'}
        errorMessage={error ? 'Error message' : undefined}
        variant={variant}
      >
        <Checkbox>{'Some item'}</Checkbox>
        <Checkbox>{'Another item'}</Checkbox>
      </CheckboxGroup>
    </LivePlayground>
  );
};

export default CheckboxGroupExample;
