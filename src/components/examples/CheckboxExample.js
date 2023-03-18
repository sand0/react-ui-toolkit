import { useState } from "react";



import Card from "../demo/Card";
import Checkbox from "../../lib/Checkbox/Checkbox";
import CheckboxGroup from "../../lib/Checkbox/CheckboxGroup";
import RadioGroup from "../../lib/RadioButton/RadioGroup";
import RadioButton from "../../lib/RadioButton/RadioButton";

const states = {
    checked: 'checked',
    unchecked: 'unchecked',
    indeterminate: 'indeterminate',
}
const stateToCheckedProp = (state) => {
    switch (state) {
        case states.checked:
            return true;

        case states.unchecked:
            return false;

        default:
            break;
    }
}

const CheckboxExample = () => {
    const [state, setState] = useState(states.unchecked);
    const [disabled, setDisabled] = useState(false);
    const [required, setRequired] = useState(false);
    const [error, setError] = useState(false);

    const handleDemoChange = (e) => {
        setState(e.target.checked ? states.checked : states.unchecked);
    }

    return (
        <Card
            title="Checkbox"
            controls={(
                <>
                    <RadioGroup
                        legendLabel="State control"
                        variant="row"
                        value={state}
                        onChange={(selected) => { setState(selected) }}
                    >
                        <RadioButton value={'unchecked'}>Unchecked</RadioButton>
                        <RadioButton value={'checked'}>Checked</RadioButton>
                        <RadioButton value={'indeterminate'}>Indeterminate</RadioButton>
                    </RadioGroup>
                    <CheckboxGroup
                        legendLabel="Other props"
                        variant="row"
                    >


                        <Checkbox
                            id="control-required"
                            checked={required}
                            onChange={(e) => {
                                setRequired(e.target.checked);
                            }}
                        >
                            Required
                        </Checkbox>
                        <Checkbox
                            id="control-disabled"

                            checked={disabled}
                            onChange={(e) => {
                                setDisabled(e.target.checked);
                            }}
                        >
                            Disabled
                        </Checkbox>
                        <Checkbox
                            id="control-error"
                            checked={error}
                            onChange={(e) => {
                                setError(e.target.checked);
                            }}
                        >
                            Has an error
                        </Checkbox>
                    </CheckboxGroup>

                </>
            )}
            demo={(
                <Checkbox
                    id="test-id"
                    name="test-name"
                    checked={stateToCheckedProp(state)}
                    indeterminate={state === 'indeterminate'}
                    onChange={handleDemoChange}
                    disabled={disabled}
                    required={required}
                    error={error}
                >
                    {'Some label for checkbox'}
                </Checkbox>
            )}
            code={`
const ExampleComponent = (props) => {
    const [state, setState] = React.useState(false);

    const changeHandler = (e) => {
        setState(e.target.checked);
    }

    return (
        <Checkbox
            id="example-checkbox-id"
            name="example-checkbox-name"
            checked={state}
            onChange={changeHandler}
        >
            <div>Can use any React Element as a label</div>
        </Checkbox>
    );
}`}
        />
    )
}

export default CheckboxExample;
