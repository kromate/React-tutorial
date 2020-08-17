import React, { Component } from 'react'

export class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Anthony'
    }
    console.log('LifecycleB Constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDSFP')
    return null
  }
  shouldComponenentUpdate(){
    console.log('LifecycleB shouldComponentUpdateA')
  }

  getSnapshotBeforeUpdate(){
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate')
  }

  componentDidMount(){
    console.log('CDM') 
  }
  
  render() {
    console.log('LifeCycle A render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }

}

export default LifecycleB
