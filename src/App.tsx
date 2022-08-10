import { css } from "@emotion/react";

function App() {
  return (
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
  );
}

export default App;
