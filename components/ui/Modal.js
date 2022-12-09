import { Fragment } from 'react';
import Backdrop from '../layout/Backdrop';
import classes from './Modal.module.css';

const ModalOverley = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`} style={props.style}>
      <header className={`${classes.modalHeader} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`${classes.modalContent} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${classes.modalFooter} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <ModalOverley {...props} />
    </Fragment>
  );
};

export default Modal;
