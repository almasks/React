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
function App() {
  return (
    <div className="App">
      {/* <ParentComponentp/> */}
      <RefsDemo/>
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
