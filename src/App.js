import React from "react";
import { Provider } from 'react-redux';
import styled from "styled-components";
import { PersistGate } from 'redux-persist/integration/react'

import "./styles.css";
import "./style/normalize.css";
import { GlobalStyle } from './globalStyle';

import { store, persistor } from './Redux/store';

import Accounts from "./Accounts/AccountsSideBar";
import MainView from "./Main/MainView";
import RecordPanel from "./Aside/RecordPanel";


const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 20px;
  background: #F3F8FB;
`;


export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Container>
                    <GlobalStyle/>
                    <Accounts />
                    <MainView />
                    <RecordPanel />
                </Container>
            </PersistGate>
        </Provider>
    );
}
