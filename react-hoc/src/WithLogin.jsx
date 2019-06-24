import React, { Component } from 'react';
const isLogin = true;
const withLogin = (Com) =>{
  class NewComponent extends Component{
    render(){
      const props=this.props;
      if(!isLogin){
        return(

          <button>需要登陆</button>
        )
      }
      return (
        <Com {...props}></Com>
      )
    }
  }
  return NewComponent
}
export default withLogin;