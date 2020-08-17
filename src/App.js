import React from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// // import Message from './components/Message'
// // import Hello from './components/Hello'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import Test from './components/myTest'
// import FragmentDemo from './components/FragmentDemo'
// import Table from './components/Table'
// import Parent from './components/ParentComp'
// import Refs from './components/RefsDemo'
// import FocusInput from './components/FocusInput';
// import FRPerentinput from './components/FRPerentinput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import { UserProvider } from './userContext';
import CompA from './components/CompA';



function App() {
  return (
    <div className="App">
      <UserProvider value='Anthony'>
      <CompA/>
      </UserProvider>
     


      {/* <HoverCounter /> */}
      {/* <ClickCounter name='Anthony'/> */}
      {/* <ErrorBoundary>    <Hero heroName="Batman" /></ErrorBoundary>
      <ErrorBoundary> <Hero heroName="Superman" /> </ErrorBoundary>
      <ErrorBoundary>  <Hero heroName="joker" /> </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRPerentinput/> */}
      {/* <FocusInput/> */}
      {/* <Parent/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <Test/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/>
      <Greet name='Bruce' heroName='Batman'>
        <p>This is Children Props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Fight</button>
      </Greet>
      <Greet name='Diane' heroName='WonderMan' />
      
      <Welcome name='Bruce' heroName='Batman'/>
      <Welcome name='Clark' heroName='Superman'/>
      <Welcome name='Diane' heroName='WonderMan'/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
