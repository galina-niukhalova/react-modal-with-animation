import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const SpacingContainer = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  display,
  children,
  width,
}) => (
  <SpacingContainer.Container
    margin={margin}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    padding={padding}
    paddingTop={paddingTop}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    display={display}
    width={width}
  >
    {children}
  </SpacingContainer.Container>
)

SpacingContainer.Container = styled.div`
  ${({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    display,
    width,
    theme: { spacing },
  }) => css`
    ${marginTop && `margin-top: ${marginTop};`}
    ${marginRight && `margin-right: ${marginRight};`}
    ${marginBottom && `margin-bottom: ${marginBottom};`}
    ${marginLeft && `margin-left: ${marginLeft};`}
    ${margin && `margin: ${margin};`}
    ${paddingTop && `padding-top: ${paddingTop};`}
    ${paddingRight && `padding-right: ${paddingRight};`}
    ${paddingBottom && `padding-bottom: ${paddingBottom};`}
    ${paddingLeft && `padding-left: ${paddingLeft};`}
    ${padding && `padding: ${padding};`}
    display: ${display};
    ${width && `width: ${width};`}
`}
`

SpacingContainer.propTypes = {
  margin: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  width: PropTypes.string,
}

SpacingContainer.defaultProps = {
  display: 'block',
}

export default SpacingContainer
