import React from 'react'
import './style.css'
import { connect } from 'smox'
import { add, cut } from '../store/reducer'

@connect(state => ({ num: state }), { add, cut })
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bg: '#000'
    }
  }
  change() {
    this.setState({
      bg:'#5dc9fd'
    })
  }
  render() {
    const bg = {
      color: this.state.bg
    }
    return (
      <div className="counter" style={bg}>
        <p>
          现在是<span>{this.props.num}</span>
        </p>
        <button onClick={this.props.add}>增加</button>
        <button onClick={this.props.cut}>减少</button>
        <button onClick={this.change.bind(this)}>变色</button>
      </div>
    )
  }
}

export default Counter
