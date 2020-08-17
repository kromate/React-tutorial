import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      message:  'Hello'
    }
    // this.change = this.change.bind(this)
  }
  

//   change() {
//     this.setState({
//     message:'GoodBye'
//   })
//     console.log(this)
// }
  
  change = () => {
    this.setState({
      message:'Goodbye!'
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.change.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.change()}>Click</button> */}
        <button onClick={this.change}>Click</button>
      </div>
    )
  }
}

export default EventBind
