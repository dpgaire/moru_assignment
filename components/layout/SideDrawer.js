import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return (
    <aside className={classes.sideDrawer} onClick={props.onClick}>
      {props.children}
    </aside>
  );
};

export default SideDrawer;
