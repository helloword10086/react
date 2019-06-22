import React from 'react'

class Couter extends React.Component{
  render(){
    const { value, onIncrement,onDecrement} =this.props
    return(
      <div>

        <div>{value}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}

export default Couter