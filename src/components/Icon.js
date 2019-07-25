import React from "react";
import PropTypes from "prop-types";

import icons from "variables/icons";
import styled from "styled-components";

function Icon({ name }) {
  return <Icon.Container>{icons[name]}</Icon.Container>;
}

Icon.Container = styled.div`
  width: 1.2rem;
  height: 1.2rem;
`;

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired
};

export default Icon;
