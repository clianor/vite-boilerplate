import { css } from "@emotion/react";

function App() {
  return (
    <>
      <main
        className="App"
        css={css`
          color: blue;
          font-size: xx-large;
          font-weight: bolder;
        `}
      >
        Main App
      </main>
      <button className="text-red-500 border border-red-500">button</button>
    </>
  );
}

export default App;
