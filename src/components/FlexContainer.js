import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const FlexContainer = ({
  alignItems,
  children,
  display,
  flexFlow,
  justifyContent,
  height,
  width
}) => (
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
  ${({ alignItems, display, flexFlow, justifyContent, height, width }) => css`
    align-items: ${alignItems};
    display: ${display};
    flex-flow: ${flexFlow};
    justify-content: ${justifyContent};
    height: ${height};
    width: ${width};
  `}
`;

FlexContainer.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  display: PropTypes.oneOf(["flex", "inline-flex"]),
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

FlexContainer.defaultProps = {
  alignItems: "stretch",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  height: "auto",
  width: "auto"
};

export default FlexContainer;
