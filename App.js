import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const picker = () => {
  return (
    <>
      <StatusBar backgroundColor='#282a40' />
      <Home />
    </>
  );
}

export default picker;