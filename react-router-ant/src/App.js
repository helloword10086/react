import React from 'react';
import {BrowserRouter as Router,Route, Link, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import Layout from './page/Layout'
// import './App.css';
import 'antd/dist/antd.css'
function Table(){
  // console.log(this.props.children)
  return (
    <div>table</div>
  )
}
function Label(){
  return (
    <div>label</div>
  )
}
function App() {
  return (
    <Router>
      <Route path='/' component={Layout}>
        <Route path='/' component={Layout}></Route>
        <Route path='/table' component={Table}></Route>
        <Route path='/label' component={Label}></Route>
      </Route>
    </Router>
  );
}

export default App;
