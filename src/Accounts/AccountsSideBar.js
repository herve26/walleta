import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import { accountSlice } from '../Redux/store';

import Account from './Account';
import NewAccount from './NewAccount';

import iconsList from '../icons';
import colorsList from '../colors';

const Container = styled.aside`
  /* border: 1px solid blue; */
  width: 250px;
  /* margin: 20px; */
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0px 3px 6px #00000029;
  height: 100%;
  background: white;
`;

const ListContainer = styled.div`
  /* border: 1px solid blue; */
`

const LogoContainer = styled.h1`
  /* border: 1px solid red; */
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 36px;
  text-transform: uppercase;
`

// const a = {id: uuid ?}

console.log(accountSlice)

export function AccountsSideBar({accounts}) {
  console.log(accounts)
  const accountsList = accounts.map(account => <Account key={account.id} {...account}/>)
  return (
    <Container>
      <LogoContainer>
        Walleta
      </LogoContainer>
      <ListContainer>
        {accountsList}
      </ListContainer>
      <NewAccount iconsList={iconsList} colorsList={colorsList}/>
    </Container>
  );
}

export default connect(({accounts}) => ({accounts}))(AccountsSideBar)