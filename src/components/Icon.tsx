import React from "react";
import styled from "styled-components";

import icons, { IconNamesType } from "variables/icons";

function Icon({ name }: IconProps) {
  return <Icon.Container>{icons[name]}</Icon.Container>;
}

Icon.Container = styled.div`
  width: 1.2rem;
  height: 1.2rem;
`;

interface IconProps {
  name: IconNamesType,
}

export default Icon;
