import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log('Reg rendered')
    return (
      <div>
        regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
