import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Icon from "components/Icon";

function CloseButton({ position, onClick }) {
  return (
    <CloseButton.Container position={position} onClick={onClick}>
      <Icon name="close" />
    </CloseButton.Container>
  );
}

CloseButton.Container = styled.div`
  ${({ position: { top, bottom, left, right } }) => css`
    position: absolute;
    ${top && `top: ${top};`}
    ${bottom && `bottom: ${bottom};`}
    ${left && `left: ${left};`}
    ${right && `right: ${right};`}
    cursor: pointer;
    z-index: 1;
  `}
`;

CloseButton.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
};

CloseButton.defaultProps = {
  position: {
    top: "0",
    left: "0"
  }
};

export default CloseButton;
