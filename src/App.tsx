import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { PangolinProvider, SwapWidget } from '@pangolindex/components';

function App() {
  const { library, chainId, account } = useWeb3React()
  return (
    <PangolinProvider library={library} chainId={chainId} account={account ?? undefined}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SwapWidget />
        </header>
      </div>
    </PangolinProvider>
  );
}

export default App;
