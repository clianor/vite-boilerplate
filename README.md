# Create Project

```shell
$ yarn create vite <project_name> --template react-ts
```

# Setting Jest

```shell
$ yarn add -D jest ts-jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event @babel/preset-react @babel/preset-typescript @babel/preset-env identity-obj-proxy
```

```json
# package.json

{
  ...
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --collectCoverage"
  },
  ...
}
```

```json
# jest.config.json

{
  "roots": ["<rootDir>/src/"],
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "\\.(css|less|svg)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": ["<rootDir>/src/setupTest.ts"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  }
}
```

```typescript
// src/setupTest.ts

// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom";
```

```typescript
// src/App.spec.tsx

import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders main element", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
});
```

```json
# babel.config.json

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

# Setting Emotion

```shell
$ yarn add @emotion/react @emotion/styled
$ yarn add -D @emotion/babel-plugin
```

```typescript
// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
```

```typescript
// tsconfig.json
{
  ...
  "compilerOptions": {
    ...
    "jsxImportSource": "@emotion/react"
  }
  ...
}
```

# Setting TailwindCSS

```shell
$ yarn add -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

```js
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```json
// package.json
{
  ...
  "type": "commonjs",
  ...
}
```

# Setting tw-macro
```shell
$ yarn add -D twin.macro @emotion/babel-plugin-jsx-pragmatic babel-plugin-macros
```