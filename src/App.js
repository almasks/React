import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StylesSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponentp from './components/ParentComponentp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoun from './components/ErrorBoun';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
function App() {
  return (
    <div className="App">
      <CounterTwo render={(count,incrementCount)=>
      <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}/>
      <CounterTwo render={(count,incrementCount)=>
      <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}/>
    
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn?"vishwas":"Guest"}/>
       {/* <ClickCounter name="vishwas"/> */}
      {/* <HoverCounter/> */} 
      {/* <ErrorBoun><Hero heroName="batman"/></ErrorBoun> */}
       {/* <Hero heroName="superman"/> */}
{/* <ErrorBoun>
        <Hero heroName="jocker"/>
  
 </ErrorBoun>  */}
      {/* <PortalDemo/> */}
      {/* <FRParent/> */}
      {/* <FocusInput/> */}
      {/* <Input/> */}
      {/* <ParentComponentp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <Inline/> */}
  {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ClassClick/>
      <ParentComponent/> */}
      {/* <Message/> */}
      {/* <Counter/> */}

      {/* <Greet name="Clark" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Super women"/>
      <Welcome name="Clark" heroName="Batman"/>
      <Welcome name="Bruce" heroName="Superman"/>
      <Welcome name="Diana" heroName="Super women"/> */}

    </div>
  );
}

export default App;
