import React, { Component } from 'react'

export class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1 
    // }, () => {
    //     console.log(this.state.count)
    // })

  //   this.setState((prevState) => ({
  //     count:prevState.count+1
  //   }), console.log(this.state.count))
  // }
    this.setState((prevState, props) => ({
      count:prevState.count+props.addValue
    }), console.log(this.state.count))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <div>
        <div> count - {this.state.count}</div>
        <button onClick={()=>{this.incrementFive()}}>increase</button>
      </div>
    )
  }
}

export default Counter
