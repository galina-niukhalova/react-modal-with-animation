import React, { useEffect, useState, Fragment } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { animationTime, animationKeyframes } from "styles/animations";
import colorPalette from "styles/colorPalette";

import CloseButton from "components/CloseButton";
import Backdrop from "components/Backdrop";

function Modal({ open, close, animationType }) {
  const [modalDomElement, setModalDomElement] = useState();
  const [animationState, setAnimationState] = useState(null);

  useEffect(() => {
    const domElement = document.createElement("div");
    document.body.appendChild(domElement);
    setModalDomElement(domElement);

    return function cleanup() {
      document.body.removeChild(domElement);
    };
  }, []);

  useEffect(() => {
    if (open !== null) {
      open ? setAnimationState("Enter") : setAnimationState("Leave");
    }
  }, [open]);

  if (!modalDomElement) {
    return null;
  }

  return createPortal(
    <Fragment>
      {open && <Backdrop onClick={close}/>}
      <Modal.Container
        open={open}
        animationState={animationState}
        animationType={animationType}
      >
        <CloseButton
          position={{ top: "2.4rem", right: "2.4rem" }}
          onClick={close}
        />
        <Modal.Body>I'm modal</Modal.Body>
      </Modal.Container>
    </Fragment>,
    modalDomElement
  );
}

Modal.Container = styled.div`
  ${({ animationState, animationType }) => {
    const animationKeyframe =
      animationKeyframes[`${animationType}${animationState}`];

    return css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 50%;
      right: 0;
      z-index: 101;
      background-color: #fff;
      border: 1px solid ${colorPalette.grey};
      transform: translate3d(100%, 0, 0);

      animation: ${animationKeyframe} ${animationTime.normal} forwards;
    `;
  }}
`;

Modal.Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
`;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  animationType: PropTypes.oneOf["slideRight"]
};

Modal.defaultProps = {
  animationType: "slideRight"
};

export default Modal;
