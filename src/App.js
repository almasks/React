import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import ParentComponent from './ParentComponent';
function App() {
  return (
    <div className="App">
      <ClassClick/>
      <ParentComponent/>
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
