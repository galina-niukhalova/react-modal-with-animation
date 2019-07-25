import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import CloseButton from "components/CloseButton";

function Modal({ open, close }) {
  const [modalDomElement, setModalDomElement] = useState();

  useEffect(() => {
    const domElement = document.createElement("div");
    document.body.appendChild(domElement);
    setModalDomElement(domElement);

    return function cleanup() {
      document.body.removeChild(domElement);
    };
  }, []);

  if (!modalDomElement) {
    return null;
  }

  return createPortal(
    <Modal.Container open={open}>
      <CloseButton
        position={{ top: "2.4rem", right: "2.4rem" }}
        onClick={close}
      />
      <Modal.Body>I'm modal</Modal.Body>
    </Modal.Container>,
    modalDomElement
  );
}

Modal.Container = styled.div`
  ${({ open }) => css`
    visibility: ${open ? "visible" : "hidden"};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #ffd;
  `}
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
  close: PropTypes.func.isRequired
};

export default Modal;
