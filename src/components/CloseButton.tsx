import React from "react";
import styled, { css } from "styled-components";

import Icon from "components/Icon";
import { PositionType } from 'types'

function CloseButton({ position, onClick }: CloseButtonProps) {
  return (
    <CloseButton.Container position={position} onClick={onClick}>
      <Icon name="close" />
    </CloseButton.Container>
  );
}

CloseButton.Container = styled.div`
  ${({ position: { top, bottom, left, right } }: CloseButtonProps) => css`
    position: absolute;
    ${top && `top: ${top};`}
    ${bottom && `bottom: ${bottom};`}
    ${left && `left: ${left};`}
    ${right && `right: ${right};`}
    cursor: pointer;
    z-index: 1;
  `}
`;

interface CloseButtonProps {
  position: PositionType,
  onClick(): void,
}

export default CloseButton;
