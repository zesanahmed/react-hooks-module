import { useState } from "react";
import UsestateExample from "./pages/UsestateExample";
// import UseStateForm from "./pages/UseStateForm";
// import UseReducerExample from "./pages/UseReducerExample";
import UseReducerWithTsPayload from "./pages/UseReducerWithTsPayload";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <UsestateExample counter={counter} setCounter={setCounter} />
        {/* <UseStateForm /> */}
        {/* <UseReducerExample /> */}
        <UseReducerWithTsPayload />
      </div>
    </>
  );
}

export default App;
