import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.formControl}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        readOnly
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
