import React, { Component } from 'react'
import CompC from './CompC'
import UserContext from '../userContext'

 class CompB extends Component {

  static contextType = UserContext
  render() {
    return (
      <div>
       component E Context {this.Context}
       <CompC/>
     </div>
    )
  }
}



export default CompB



// import React from 'react'
// import CompC from './CompC'
// import UserContext from '../userContext'

// function CompB() {
//   return (
//     <div>
//       Component E Context {this.Context}
//       <CompC/>
//     </div>
//   )
// }

// CompB.contextType = UserContext

// export default CompB
