import React from "react";
import styled from "styled-components";

const Container = styled.main`
  border: 1px solid blue;
  flex-grow: 1;
`

export default function MainView() {
  return <Container>Main</Container>;
}
