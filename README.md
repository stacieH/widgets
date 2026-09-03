# widget-boilerplate

A lightweight, embeddable React login widget distributed as an ES module library.

## Requirements

- Node >= 24.14.0
- npm >= 11.9.0
- React 19 (peer dependency)

## Installation

```bash
npm install widget-boilerplate
```

React and ReactDOM must be installed in the consuming app:

```bash
npm install react react-dom
```

## Usage

### Login component

```tsx
import { App } from "widget-boilerplate";

function MyApp() {
  return <App text="Welcome back! Please log in." />;
}
```

### useApp hook

```tsx
import { useApp } from "widget-boilerplate";

function MyComponent() {
  const { text } = useApp({ text: "Sign in to continue." });
  return <p>{text}</p>;
}
```

### Props

| Prop   | Type     | Default     | Description             |
| ------ | -------- | ----------- | ----------------------- |
| `text` | `string` | `undefined` | Text rendered by widget |

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Lint
npm run lint

# Format
npm run format
```

## Project structure

```
src/
  components/App/   # App widget component
  hooks/useApp.ts   # Core hook
  context/          # WidgetProvider and WidgetContext
  types/            # Shared TypeScript interfaces
stories/            # Storybook stories
```

## Publishing

```bash
npm run publish
```

The built output in `dist/` is what gets published. Ensure you run `npm run build` first.

## License

ISC
