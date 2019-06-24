import React from 'react';

class Login extends React.Component{
  render(){
    return(
      <ul>
        <li>手机</li>
        <li>平板</li>
        <li>{this.props.a}</li>
      </ul>
    )
  }
}

export default Login