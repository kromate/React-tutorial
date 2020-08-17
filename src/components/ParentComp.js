import React, { Component } from 'react'
import Reg from './RegComp'
import Pure from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:'Anthony'
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Anthony'
      })
    }, 2000)
  }
  render() {
    console.log('Parent rendered')
    return (
      <div>
        parent Component
        <MemoComp name={this.state.name}/>
        {/* <Reg name={this.state.name}/> */}
        {/* <Pure name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
