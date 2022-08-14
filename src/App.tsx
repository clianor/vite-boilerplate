import React, { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const decrease = useCallback(() => setCount((prev) => prev - 1), []);
  const increase = useCallback(() => setCount((prev) => prev + 1), []);
  return (
    <>
      <main
        className="App"
        tw="flex flex-col items-center justify-center h-screen"
      >
        <span tw="text-4xl font-bold text-purple-500">Main App</span>
        <div tw="mt-4 text-2xl flex gap-x-4">
          <button
            tw="flex items-center justify-center border border-purple-500 px-2"
            type="button"
            onClick={decrease}
          >
            -
          </button>
          <span>{count}</span>
          <button
            tw="flex items-center justify-center border border-purple-500 px-2"
            type="button"
            onClick={increase}
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
