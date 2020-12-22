import React from "react";
import styled from "styled-components";

import { PanelContainer } from '../Components/Panel';

const Container = styled(PanelContainer)`
  /*border: 1px solid blue;*/
  flex-grow: 1;
  width: auto;
  padding: 24px;
  margin: 0 20px;
`

export default function MainView() {
  return <Container as="main">Main</Container>;
}
