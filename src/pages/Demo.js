import CheckboxGroup from '../lib/Checkbox/CheckboxGroup';
import Checkbox from '../lib/Checkbox/Checkbox';
import RadioButton from '../lib/RadioButton/RadioButton';
import RadioGroup from '../lib/RadioButton/RadioGroup';
import image from '../assets/logo192.png';

const  Demo = () => {
    return (
        <>
            <h1>This is the Demo Page</h1>
            <section>
                <h2>Checkbox</h2>
                <div>
                    <h3>General usage</h3>
                    <RadioGroup 
                        name='Test Radiogroup'
                    >
                        <RadioButton disabled value={'1'}>
                            {'Label 1'}
                        </RadioButton>
                        <RadioButton disabled value={'2'}>
                            {'Label 2'}
                        </RadioButton>
                    </RadioGroup>
                </div>
                <div>
                    <h3>Disabled state</h3>
                    <Checkbox checked disabled>
                        {'Disabled checked'}
                    </Checkbox>
                    <Checkbox disabled>
                        {'Disabled unchecked'}
                    </Checkbox>
                </div>
                <div>
                    <h3>Required state</h3>
                    <Checkbox required>
                        {'Required'}
                    </Checkbox>
                </div>
                <div>
                    <h3>Error state</h3>
                    <Checkbox error>
                        {'This is invalid'}
                    </Checkbox>
                    <Checkbox required error>
                        {'Required'}
                    </Checkbox>
                </div>
                <div>
                    <h3>Indeterminate initial state</h3>
                    <Checkbox indeterminate>
                        {'Label'}
                    </Checkbox>
                </div>
                <div>
                    <h3>Custom Label element</h3>
                    <Checkbox>
                        <h3>Title Label</h3>
                    </Checkbox>
                    <Checkbox error>
                        <div style={{borderStyle: 'solid', borderColor: '#9e9e9e50'}}>
                            <h4>Title Label</h4>
                            <img src={image} alt="Logo" />
                        </div>
                    </Checkbox>
                </div>
            </section>
            <section>
                <h2>CheckboxGroup</h2>
                <div>
                    <h3>General usage</h3>
                    <CheckboxGroup name={'Demo group'} description={'Some longer description text here'} errorMessage={'Error message'}>
                        <Checkbox>
                            {'Some item'}
                        </Checkbox>
                        <Checkbox>
                            {'Another item'}
                        </Checkbox>
                    </CheckboxGroup>
                </div>
            </section>
        </>
    );
}

export default Demo;
