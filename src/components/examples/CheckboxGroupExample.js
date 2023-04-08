import CheckboxGroup from '../../lib/Checkbox/CheckboxGroup';
import Checkbox from '../../lib/Checkbox/Checkbox';

const CheckboxGroupExample = () => {
  return (
    <section>
      <h2>CheckboxGroup</h2>
      <div>
        <h3>General usage</h3>
        <CheckboxGroup
          name={'Demo group'}
          description={'Some longer description text here'}
          errorMessage={'Error message'}
        >
          <Checkbox>{'Some item'}</Checkbox>
          <Checkbox>{'Another item'}</Checkbox>
        </CheckboxGroup>
      </div>
    </section>
  );
};

export default CheckboxGroupExample;
