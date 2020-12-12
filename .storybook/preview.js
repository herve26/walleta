import React from 'react';
import { GlobalStyle } from '../src/globalStyle';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <><GlobalStyle/><Story/></>
)]