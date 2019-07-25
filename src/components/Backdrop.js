import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Backdrop({ onClick }) {
  return <Backdrop.Container onClick={onClick} />;
}

Backdrop.Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
`;

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Backdrop.Container;
