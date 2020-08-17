import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Anthony'
    }
    console.log('LifecycleA Constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDSFP')
    return null
  }

  shouldComponenentUpdate(){
    console.log('LifecycleA shouldComponentUpdateA')
  }

  getSnapshotBeforeUpdate(){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecyckeA componentDidUpdate')
  }
  componentDidMount(){
    console.log('CDM') 
  }
  
  changeState = () =>{
    this.setState({
      name:'kromtech'
    })
  }
  render() {
    console.log('LifeCycle A render')
    return (
      <div>
       <div>LifecycleA</div> 
       <button onClick={this.changeState}>Change State</button>
       <LifecycleB/>

      </div>
    )
  }

}

export default LifecycleA
