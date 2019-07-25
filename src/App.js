import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import HomePage from 'pages/HomePage'

import colorPalette from "styles/colorPalette";
import { fontStyle } from "styles/fonts";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colorPalette.white};
    color: ${colorPalette.base};
    font-family: ${fontStyle.default};
    font-size: 1.4rem;
  }

  button,
  a,
  span {
    font-family: ${fontStyle.default};
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <HomePage />
    </Fragment>
  );
}

export default App;
