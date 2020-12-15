import React from "react";
import { Provider } from 'react-redux';
import styled from "styled-components";

import "./styles.css";
import "./style/normalize.css";
import { GlobalStyle } from './globalStyle';

import store, { accountSlice } from './Redux/store';

import Accounts from "./Accounts/AccountsSideBar";
import MainView from "./Main/MainView";
import TransactionInput from "./Aside/TransactionsInput";


const { add_account, remove_account } = accountSlice


const Container = styled.div`
  display: flex;
  border: 1px solid red;
  height: 100vh;
  padding: 20px;
  background: #F3F8FB;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle/>
        <Accounts accounts={[]}/>
        <MainView />
        <TransactionInput />
      </Container>
    </Provider>
  );
}
