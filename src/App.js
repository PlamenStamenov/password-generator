import React from 'react';
import Header from './components/header/Header';
import PasswordGenerator from './components/password-generator/PasswordGenerator';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <PasswordGenerator />
    </div>
  );
}

export default App;