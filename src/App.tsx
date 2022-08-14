import { ReactElement, useCallback, useEffect, useState } from 'react';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  const onDecrease = useCallback(() => setCount(count - 1), [count]);
  const onIncrease = useCallback(() => setCount(count + 1), [count]);

  useEffect(() => {
    const interval = setInterval(() => console.log('test'), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
            onClick={onDecrease}
          >
            -
          </button>
          <span>{count}</span>
          <button
            tw="flex items-center justify-center border border-purple-500 px-2"
            type="button"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
