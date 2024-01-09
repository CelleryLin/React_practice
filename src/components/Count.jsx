import React, { Component } from 'react'

export default class Count extends Component {

  render() {
    return (
        <p
            onClick={this.props.setCount}
        >
            {this.props.text}
        </p>
    )
  }
}