/* eslint-disable default-case */
import React, { useEffect, useState, Fragment } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import CloseButton from "components/CloseButton";
import Backdrop from "components/Backdrop";

const mapTypeToStyle = {
  slideRight: {
    position: {
      top: "0",
      right: "0"
    },
    transform: {
      from: "translateX(100%)",
      to: "translateX(0)"
    },
    size: {
      width: "300px",
      height: "100%"
    }
  },
  slideLeft: {
    position: {
      top: "0",
      left: "0"
    },
    transform: {
      from: "translateX(-100%)",
      to: "translateX(0)"
    },
    size: {
      width: "300px",
      height: "100%"
    }
  },
  slideUp: {
    position: {
      top: "0",
      left: "0"
    },
    transform: {
      from: "translateY(-100%)",
      to: "translateY(0)"
    },
    size: {
      width: "100%",
      height: "200px"
    }
  },
  slideDown: {
    position: {
      bottom: "0",
      left: "0"
    },
    transform: {
      from: "translateY(100%)",
      to: "translateY(0)"
    },
    size: {
      width: "100%",
      height: "200px"
    }
  }
};

function Modal({ open, close, animationType }) {
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

  const { position, transform, size } = mapTypeToStyle[animationType];

  return createPortal(
    <Fragment>
      {open && <Backdrop onClick={close} />}
      <Modal.Container
        open={open}
        position={position}
        transform={transform}
        size={size}
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
  ${({
    open,
    position: { top, bottom, left, right },
    transform: { from, to },
    size: { width, height }
  }) => {
    return css`
      position: fixed;
      ${top && `top: ${top};`}
      ${bottom && `bottom: ${bottom};`}
      ${left && `left: ${left};`}
      ${right && `right: ${right};`}
      width: ${width};
      height: ${height};
      z-index: 101;
      background-color: white;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transform: ${!open ? from : to};
      transition: 0.2s;
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
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
  animationType: PropTypes.oneOf([
    "slideRight",
    "slideLeft",
    "slideUp",
    "slideDown"
  ])
};

Modal.defaultProps = {
  animationType: "slideRight"
};

export default Modal;
