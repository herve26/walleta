import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import * as accountActions from '../Redux/reducers/accountsSlice';

import Account from './Account';
import NewAccount from './NewAccount';
import AccountEditForm from './AccountEditForm';

import iconsList from '../icons';
import colorsList from '../colors';
import { PanelContainer } from '../Components/Panel';


const Container = styled(PanelContainer)`
  padding: 24px;
`
const ListContainer = styled.div`
  /* border: 1px solid blue; */
  margin-top: 12px;
`

const LogoContainer = styled.h1`
  /* border: 1px solid red; */
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  /*margin-bottom: 36px;*/
  text-transform: uppercase;
`
const NewAccountButtonContainer = styled.div`
  margin-top: 24px;
`
const AccountsContainer = styled.div`
  /*border: 1px solid blue;*/
  max-height: calc(100% - 102px);
  overflow-y: auto;
`

// const a = {id: uuid ?}

export function AccountsSideBar({accounts, edit_account, select_account, remove_account}) {

  const [isEditingAccount, setIsEditingAccount] = useState(false)
  const [editIdx, setEditIdx] = useState(0)
  let accountEditElements = {title: '', icon: 0, color: 0}
  const handleAccountSelection = idx => {
    select_account(idx)
  }
  const handleAccountRemoval = idx => {
    remove_account(idx)
  }
  const handleAccountEdition = idx => {
    setEditIdx(idx);
    setIsEditingAccount(true)
  }
  const handleAccountEditFormSubmit = values => {
    setIsEditingAccount(false)
    let editedAccount = {...accounts[editIdx], title: values.title, icon: values.icon, color: values.color}
    edit_account(editedAccount)
  }
  const accountsList = 
      Object.values(accounts).map((account, idx) => <Account 
                                          {...account}
                                          onActivated={handleAccountSelection} 
                                          onRemoved={handleAccountRemoval}
                                          onEdited={handleAccountEdition}
                                          key={idx}
                                          Icon={iconsList[account.icon]}
                                          color={colorsList[account.color]}
                                      />)
  return (
    <Container>
      <LogoContainer>
        Walleta
      </LogoContainer>
        <AccountsContainer>
        {isEditingAccount && 
          <AccountEditForm
            initTitle={accounts[editIdx].title}
            initIcon={accounts[editIdx].icon}
            initColor={accounts[editIdx].color}
            iconsList={iconsList}
            colorsList={colorsList}
            onSubmitted={handleAccountEditFormSubmit}
          />}
        <ListContainer>
          {accountsList}
        </ListContainer>
        <NewAccountButtonContainer>
          <NewAccount iconsList={iconsList} colorsList={colorsList}/>
        </NewAccountButtonContainer>
      </AccountsContainer>
    </Container>
  );
}

export default connect(({accounts}) => ({accounts}), accountActions)(AccountsSideBar)