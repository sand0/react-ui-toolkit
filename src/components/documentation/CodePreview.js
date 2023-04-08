import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import classes from './CodePreview.module.css';

// override some styles for better main theme matching
// TODO: move this out and create own code theme
const styles = {
  ...solarizedLight,
  hljs: {
    overflowX: 'auto',
    padding: '1rem',
    color: 'var(--color-gray-600)',
    background: 'var(--color-secondary-200)',
  },
};

const CodePreview = (props) => {
  const { title, code } = props;

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{title}</h3>
      <SyntaxHighlighter
        className={classes.container}
        style={styles}
        language='javascript'
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
