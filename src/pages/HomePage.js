import React, { useState } from "react";
import styled from "styled-components";

import Title from "components/Title";
import Modal from "components/Modal";
import Button from "components/Button";
import FlexContainer from "components/FlexContainer";
import SpacingContainer from "components/SpacingContainer";
import colorPalette from "styles/colorPalette";
import { titleCase } from "helpers/utils";

function HomePage() {
  const [modalType, setModalType] = useState(null);

  return (
    <HomePage.Container>
      <FlexContainer
        height="100%"
        flexFlow="column nowrap"
        alignItems="center"
        justifyContent="center"
      >
        <Title>A React modal with animations</Title>
        <SpacingContainer marginTop="2rem" marginBottom="1.6rem">
          {renderButtonsRow(["left", "right"])}
        </SpacingContainer>
        {renderButtonsRow(["up", "down"])}
      </FlexContainer>
      {renderModal("slideRight")}
      {renderModal("slideLeft")}
      {renderModal("slideUp")}
      {renderModal("slideDown")}
    </HomePage.Container>
  );

  function renderButtonsRow(buttonTypes) {
    return (
      <FlexContainer>
        <SpacingContainer marginRight="2.4rem">
          {renderSlideButton(buttonTypes[0])}
        </SpacingContainer>
        {renderSlideButton(buttonTypes[1])}
      </FlexContainer>
    );
  }

  function renderSlideButton(type) {
    return (
      <Button
        onClick={() => {
          setModalType(`slide${titleCase(type)}`);
        }}
      >
        Slide {type}
      </Button>
    );
  }

  function renderModal(type) {
    return (
      <Modal
        animationType={type}
        open={type === modalType}
        close={() => setModalType(null)}
      />
    );
  }
}

HomePage.Container = styled.div`
  height: 100vh;
  padding: 8rem;
  border: 1px solid ${colorPalette.grey};
  background-color: ${colorPalette.lightPink};
`;

export default HomePage;
