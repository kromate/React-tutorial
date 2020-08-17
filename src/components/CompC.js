import React from 'react'
import { UserConsumer } from '../userContext'

function CompC() {
  return (
  <UserConsumer>
    {
      (username)=>{
      return <div>Hello {username}</div>
      }
    }
  </UserConsumer>
  )
}

export default CompC
