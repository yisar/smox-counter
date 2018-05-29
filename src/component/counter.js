import React from 'react'
import './style.css'
import { withStore } from 'smox'

@withStore
class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
        <p>
          现在是<span>{this.props.count}</span>
        </p>
        <button onClick={this.props.add}>增加</button>
        <button onClick={this.props.cut}>减少</button>
        <button onClick={this.props.asyncAdd}>延时</button>
      </div>
    )
  }
}

export default Counter
