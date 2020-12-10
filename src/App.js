import React from "react";
import styled from "styled-components";

import "./styles.css";
import "./style/normalize.css";

import Accounts from "./Accounts/AccountsSideBar";
import MainView from "./Main/MainView";
import TransactionInput from "./Aside/TransactionsInput";

const Container = styled.div`
  display: flex;
  border: 1px solid red;
`;

export default function App() {
  return (
    <Container>
      <Accounts />
      <MainView />
      <TransactionInput />
    </Container>
  );
}
