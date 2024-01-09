import React, { Component } from 'react'
import Count from './Count'

export default class StateEx extends Component {
  // State 變數管理
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="header">
        <h3>{this.props.title}</h3>

         {/* import a component from Count.jsx 並且將state包裝的變數傳入*/}
        <Count
          text={this.state.count}
          setCount={
            () => {
              this.setState({count: this.state.count + 1 })
            }
          }
        />
      </div>
    )
  }
}