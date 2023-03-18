import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <section className={classes.wrapper}>
            <h2>{props.title}</h2>
            <div className={classes.code}>
                {props.code && (
                    <>
                        <h3>Code example</h3>
                        <SyntaxHighlighter language="javascript" style={themes.a11yDark}>
                            {props.code}
                        </SyntaxHighlighter>
                    </>
                )}
            </div>
            <h3>Live demo</h3>
            <div className={classes.liveContainer}>
                <div className={classes.controls}>
                    {props.controls}
                </div>
                <div className={classes.demo}>
                    {props.demo}
                </div>
            </div>
        </section>
    )
}

export default Card;
