import { useState } from "react";
import UsestateExample from "./pages/UsestateExample";
import UseStateForm from "./pages/UseStateForm";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <UsestateExample counter={counter} setCounter={setCounter} />
        <UseStateForm />
      </div>
    </>
  );
}

export default App;
