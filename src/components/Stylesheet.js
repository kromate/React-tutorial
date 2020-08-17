import React from 'react'
import  './myStyles.css'
function stylesheet(props) {
  let ClassName = props.primary ? 'primary':''
  return (
    <div>
      <h1 className={`${ClassName} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default stylesheet
