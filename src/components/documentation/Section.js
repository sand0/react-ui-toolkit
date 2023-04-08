import classes from './Section.module.css';

const Section = (props) => {
  const { title } = props;

  return (
    <section className={classes.wrapper}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.container}>{props.children}</div>
    </section>
  );
};

export default Section;
