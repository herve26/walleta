import React from "react";
import styled from "styled-components";

import "./styles.css";
import "./style/normalize.css";
import { GlobalStyle } from './globalStyle';

import Accounts from "./Accounts/AccountsSideBar";
import MainView from "./Main/MainView";
import TransactionInput from "./Aside/TransactionsInput";



const Container = styled.div`
  display: flex;
  border: 1px solid red;
  height: 100vh;
  padding: 20px;
  background: #F3F8FB;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Accounts accounts={[]}/>
      <MainView />
      <TransactionInput />
    </Container>
  );
}
