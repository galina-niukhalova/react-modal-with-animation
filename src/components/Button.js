import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import colorPalette from "styles/colorPalette";

const Button = ({ children, onClick }) => (
  <Button.Container onClick={onClick}>{children}</Button.Container>
);

Button.Container = styled.button`
  font-size: 1.6rem;
  padding: 0.8rem 2rem;
  width: 12.0rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, .1);
  background-color: ${colorPalette.white};
  cursor: pointer;
  outline: none;
  transform: translateY(0);
  transition: transform 0.2s;

  :active {
    transform: translateY(1px);
  }
`;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
