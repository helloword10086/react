import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Shop'
import Login from './Login'
import WithLogin from './WithLogin'

const WithLoginStatus = WithLogin(Login)
const WithShop = WithLogin(Shop)
function App() {
  return (
    <React.Fragment>

      <WithLoginStatus a='1'></WithLoginStatus>
      <WithShop></WithShop>
    </React.Fragment>
  )
}

export default App;
