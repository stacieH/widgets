# login-widget

A customizable React login component with built-in validation, dark theme, icon slots, social login buttons, and password visibility toggle.

## Requirements

- React 19+
- Node 24+

## Installation

```bash
npm install login-widget
```

## Usage

```tsx
import { Login } from "login-widget";

export default function App() {
  return (
    <Login
      events={{
        onSubmit: ({ email, password }) => console.log(email, password),
      }}
    />
  );
}
```

## Props

### `labels`

Override the field labels.

| Key        | Type     | Default       |
| ---------- | -------- | ------------- |
| `email`    | `string` | `"Email id"`  |
| `password` | `string` | `"Password"`  |

### `placeholders`

Override the input placeholder text.

| Key        | Type     | Default                    |
| ---------- | -------- | -------------------------- |
| `email`    | `string` | `"joe@email.com"`          |
| `password` | `string` | `"Enter your Password"`    |

### `text`

Override all visible string content.

| Key              | Type     | Default                        |
| ---------------- | -------- | ------------------------------ |
| `title`          | `string` | `"Log in"`                     |
| `subtitle`       | `string` | —                              |
| `submitButton`   | `string` | `"Login"`                      |
| `forgotPassword` | `string` | `"forgot password?"`           |
| `registerPrompt` | `string` | `"Don't have an account?"`     |
| `registerLink`   | `string` | `"Register here"`              |
| `successMessage` | `string` | `"Logged in successfully!"`    |
| `divider`        | `string` | `"OR"`                         |

### `validations`

| Key                 | Type     | Default |
| ------------------- | -------- | ------- |
| `passwordMinLength` | `number` | `8`     |

### `errorMessages`

Override validation error text.

| Key                | Type                                       | Default                                        |
| ------------------ | ------------------------------------------ | ---------------------------------------------- |
| `emailRequired`    | `string`                                   | `"Email is required."`                         |
| `emailInvalid`     | `string`                                   | `"Enter a valid email address."`               |
| `passwordRequired` | `string`                                   | `"Password is required."`                      |
| `passwordTooShort` | `string \| ((minLength: number) => string)` | `"Password must be at least N characters."` |

### `events`

| Key               | Type                                          | Description                              |
| ----------------- | --------------------------------------------- | ---------------------------------------- |
| `onSubmit`        | `(credentials: LoginCredentials) => void`     | Called on successful form submission     |
| `onForgotPassword`| `() => void`                                  | Called when the forgot password link is clicked |
| `onRegister`      | `() => void`                                  | Called when the register link is clicked |

`LoginCredentials` is `{ email: string; password: string }`.

### `theme`

`"light"` (default) or `"dark"`.

```tsx
<Login theme="dark" />
```

### `icons`

Render a React node (e.g. an SVG icon) inside the email or password field.

```tsx
<Login
  icons={{
    email: <EmailIcon />,
    password: <LockIcon />,
  }}
/>
```

### `showPasswordToggle`

Show an eye icon button that toggles password visibility.

```tsx
<Login showPasswordToggle />
```

### `social`

An array of social login providers rendered as icon buttons below an `OR` divider.

```tsx
<Login
  social={[
    {
      id: "google",
      icon: <GoogleIcon />,
      label: "Sign in with Google",
      onClick: () => signInWithGoogle(),
    },
    {
      id: "facebook",
      icon: <FacebookIcon />,
      label: "Sign in with Facebook",
      onClick: () => signInWithFacebook(),
    },
  ]}
/>
```

| Key      | Type              | Description                                |
| -------- | ----------------- | ------------------------------------------ |
| `id`     | `string`          | Unique key for the provider                |
| `icon`   | `React.ReactNode` | Icon element rendered inside the button    |
| `label`  | `string`          | Accessible `aria-label` (defaults to `id`) |
| `onClick`| `() => void`      | Click handler                              |

### `styles`

Inline style overrides for individual elements.

| Key            | Type                  |
| -------------- | --------------------- |
| `wrapper`      | `React.CSSProperties` |
| `card`         | `React.CSSProperties` |
| `title`        | `React.CSSProperties` |
| `subtitle`     | `React.CSSProperties` |
| `label`        | `React.CSSProperties` |
| `inputWrapper` | `React.CSSProperties` |
| `input`        | `React.CSSProperties` |
| `submitButton` | `React.CSSProperties` |
| `forgotButton` | `React.CSSProperties` |
| `errorText`    | `React.CSSProperties` |
| `divider`      | `React.CSSProperties` |
| `socialButton` | `React.CSSProperties` |
| `registerText` | `React.CSSProperties` |

## Full example

```tsx
import { Login } from "login-widget";
import { EmailIcon, LockIcon, GoogleIcon } from "./icons";

export default function LoginPage() {
  return (
    <Login
      theme="dark"
      text={{ title: "Welcome back", subtitle: "Sign in to continue" }}
      icons={{ email: <EmailIcon />, password: <LockIcon /> }}
      showPasswordToggle
      validations={{ passwordMinLength: 10 }}
      social={[
        {
          id: "google",
          icon: <GoogleIcon />,
          label: "Sign in with Google",
          onClick: () => console.log("google"),
        },
      ]}
      events={{
        onSubmit: ({ email, password }) => console.log({ email, password }),
        onForgotPassword: () => console.log("forgot"),
        onRegister: () => console.log("register"),
      }}
    />
  );
}
```

## Development

```bash
# Build the library
npm run build

# Run Storybook
npm run storybook

# Lint
npm run lint
npm run lint:fix

# Format
npm run format
npm run format:check
```

## License

ISC
