import './App.css';
import Welcome from "./components/welcome";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/classClick";

function App() {
  return (
    <div className="App">
        {/* <Welcome name="Monday" duty="Go to work"/>
            <Welcome name="Tuesday" duty="Read a book" />
            <Welcome name="Wednesday" duty="Book Review" />

        {/*  <Message /> */}
        {/*  <Counter />
         <FunctionClick />
        */}
      <ClassClick />

    </div>
  );
}

export default App;
