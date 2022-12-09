import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.inverse ? classes.inverse : classes.primary}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
