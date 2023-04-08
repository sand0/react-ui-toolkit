import classes from './LivePlayground.module.css';

const LivePlayground = (props) => {
    const { controls, children } = props;

    return (
        <div className={classes.container}>
            <div className={classes.controls}>
                {controls}
            </div>
            <div className={classes.demo}>
                {children}
            </div>
        </div>
    )
}

export default LivePlayground;
