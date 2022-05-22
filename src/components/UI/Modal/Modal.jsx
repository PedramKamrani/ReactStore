import "./Modal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.show} click={props.modalClose} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
          display: props.show ? "block" : "none",
        }}
      >
        {props.children}
      </div>
      ;
    </Wrapper>
  );
};
export default Modal;
