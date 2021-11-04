import { Fragment } from "react";
import ReactDOM from "react-dom"; // For the react portals

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

// What makes it an overlay is most likely because of the classes.modal where it has an animation: forward
const ModalOverlay = (props) => {
  return ( // classes.content is never used, I guess a mistake from the course
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    // Here we use React Portals
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
