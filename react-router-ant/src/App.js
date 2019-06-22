import React from 'react';
import {BrowserRouter as Router,Route, Link, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import Layout from './page/Layout'
// import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <Route path='/' component={Layout}>
       
      </Route>
    </Router>
  );
}

export default App;
