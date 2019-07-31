import React from "react";
import styled from 'styled-components'

const Backdrop = ({ onClick }: BackdropProps) => (
  <Backdrop.Container onClick={onClick} />
)

Backdrop.Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
`;

interface BackdropProps {
  onClick(): void,
}

export default Backdrop.Container;
