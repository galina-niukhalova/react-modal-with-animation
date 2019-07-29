import React from "react";
import styled from "styled-components";

function Title({ children }) {
  return <Title.Container>{children}</Title.Container>;
}

Title.Container = styled.h1`
`;

export default Title;
