import React, { useState, Fragment } from "react";

import Modal from "components/Modal";
import Button from "components/Button";
import FlexContainer from "components/FlexContainer";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <FlexContainer alignItems="center" justifyContent="center" height="100vh">
        <Button onClick={() => setIsModalOpen(true)}>Click me</Button>
      </FlexContainer>
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)} />
    </Fragment>
  );
}

export default HomePage;
