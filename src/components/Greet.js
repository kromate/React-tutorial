import React from 'react';

// function Greet() {
//   return <h1>Hello Anthony</h1>
// }

// const Greet = ({name, heroName}) => {
//   // console.log(props)
//   return (
//     <div>
//       <h1>Hello {name} a.k.a {heroName}</h1>
//       {/* {props.children} */}
//     </div>
  
//   ) 
// }

const Greet = (props) => {
  const { name, heroName } = props
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
      {/* {props.children} */}
    </div>
  
  ) 
}

export default Greet