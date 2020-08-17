import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }
  render() {

   return this.state.isLoggedIn &&  <div>Welcome Anthony</div>
    // return this.state.isLoggedIn ? (
    //   <div> Welcome Anthony</div>
    // ) :
    //   (<div> Welcome Guest</div>)
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div> Welcome Anthony</div>
    // } else {
    //   message = <div> Welcome Guest</div>
    // }
    // return message

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div> Welcome Anthony</div>
    //   )
    // } else {
    //   return (
    //     <div> Welcome Guest</div>
    //   )
    // }

    // return (
    //   <div>
    //     <div> Welcome Anthony</div>
    //     <div> Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
