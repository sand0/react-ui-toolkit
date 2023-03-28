const example =  `const ExampleComponent = (props) => {
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
}`;

export default example;
