import React, { Fragment } from "react";
import Modal from "./components/Modal";
import { createGlobalStyle } from "styled-components";
import colorPalette from "./styles/colorPalette";
import { fontStyle } from "./styles/fonts";

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
      <Modal />
    </Fragment>
  );
}

export default App;
