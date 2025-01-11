import { Dispatch } from "react";
type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const UsestateExample = ({ counter, setCounter }: TCounter) => {
  return (
    <div>
      <h1 className="text-2xl">{counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UsestateExample;

// import { useState } from "react";

// const UsestateExample = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <h1 className="text-2xl">{counter}</h1>
//       <button
//         className="btn btn-primary"
//         onClick={() => setCounter(counter + 1)}
//       >
//         Increment
//       </button>
//       <button className="btn btn-error" onClick={() => setCounter(counter - 1)}>
//         Decrement
//       </button>
//       <button className="btn btn-error" onClick={() => setCounter(0)}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default UsestateExample;
