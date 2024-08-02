import { useState } from "react";
import "./App.css";

function App() {
  const [count, seCount] = useState(0);
  function decreaseHandler() {
    seCount(count - 1);
    console.log(count);
  }
  function increaseHandler() {
    seCount(count + 1);
    console.log(count);
  }
  function resetHandler() {
    seCount(0);
    console.log(count);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Dcrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <div>
          <button
            onClick={decreaseHandler}
            className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
          >
            -
          </button>
        </div>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <div onClick={increaseHandler}>
          <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
            +
          </button>
        </div>
      </div>

      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      >
        reset
      </button>
    </div>
  );
}

export default App;
