import React from "react";
import styled, { css } from "styled-components";

const FlexContainer = ({
  children,
  alignItems = 'stretch',
  display = 'flex',
  flexFlow = 'row nowrap',
  justifyContent = 'flex-start',
  height = 'auto',
  width = 'auto'
}: FlexContainerProps) => (
    <FlexContainer.Component
      alignItems={alignItems}
      display={display}
      flexFlow={flexFlow}
      justifyContent={justifyContent}
      height={height}
      width={width}
    >
      {children}
    </FlexContainer.Component>
  );

FlexContainer.Component = styled.div`
  ${({ alignItems, display, flexFlow, justifyContent, height, width }: FlexContainerStyleProps) => css`
    align-items: ${alignItems};
    display: ${display};
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    height: ${height};
    width: ${width};
  `}
`;

interface FlexContainerStyleProps {
  alignItems?: string,
  display?: 'flex' | 'inline-flex',
  flexFlow?: string,
  justifyContent?: string,
  height?: string,
  width?: string,
}

interface FlexContainerProps extends FlexContainerStyleProps {
  children: React.ReactNode | React.ReactNode[],
}

export default FlexContainer;
