import React from "react";
import Login from "../src/components/Login";
import EmailIcon from "../src/components/Icons/EmailIcon";
import LockIcon from "../src/components/Icons/LockIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import GoogleIcon from "./Icons/GoogleIcon";
import AppleIcon from "./Icons/AppleIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  parameters: { layout: "fullscreen" },
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};

export const Dark: Story = {
  args: { theme: "dark" },
};

export const PasswordToggle: Story = {
  name: "Password toggle (no icon)",
  args: {
    showPasswordToggle: true,
  },
};

export const PasswordToggleWithIcon: Story = {
  name: "Password toggle (with icon)",
  args: {
    icons: { password: <LockIcon /> },
    showPasswordToggle: true,
  },
};

export const WelcomeWithSocial: Story = {
  name: "Welcome (with icons + social)",
  args: {
    text: {
      title: "Welcome",
      subtitle: "Login with Email",
      submitButton: "LOGIN",
      forgotPassword: "Forgot your password?",
      registerPrompt: "Don't have account?",
      registerLink: "Register Now",
      divider: "OR",
    },
    icons: {
      email: <EmailIcon />,
      password: <LockIcon />,
    },
    showPasswordToggle: true,
    social: [
      {
        id: "google",
        icon: <GoogleIcon />,
        label: "Continue with Google",
        onClick: () => alert("Google"),
      },
      {
        id: "facebook",
        icon: <FacebookIcon />,
        label: "Continue with Facebook",
        onClick: () => alert("Facebook"),
      },
      {
        id: "apple",
        icon: <AppleIcon />,
        label: "Continue with Apple",
        onClick: () => alert("Apple"),
      },
    ],
    styles: {
      title: { fontSize: "2.5rem", color: "#4f8ef7", fontWeight: 800 },
    },
    events: {
      onForgotPassword: () => alert("Forgot password"),
      onRegister: () => alert("Register"),
    },
  },
};

export const WelcomeWithSocialDark: Story = {
  name: "Welcome — dark",
  args: {
    ...WelcomeWithSocial.args,
    theme: "dark",
  },
};

export const CustomText: Story = {
  args: {
    text: {
      title: "Welcome Back",
      submitButton: "Sign In",
      forgotPassword: "Forgot your password?",
      registerPrompt: "New here?",
      registerLink: "Create an account",
      successMessage: "You're in!",
    },
  },
};

export const CustomLabelsAndPlaceholders: Story = {
  args: {
    labels: { email: "Work Email", password: "Passphrase" },
    placeholders: { email: "you@company.com", password: "Enter your passphrase" },
  },
};

export const CustomValidation: Story = {
  args: {
    validations: { passwordMinLength: 12 },
    errorMessages: {
      emailRequired: "Please provide your email.",
      emailInvalid: "That doesn't look like a valid email.",
      passwordRequired: "A password is required.",
      passwordTooShort: (min) => `Passphrase must be at least ${min} characters.`,
    },
  },
};

export const WithEvents: Story = {
  args: {
    events: {
      onSubmit: (credentials) => alert(`Submitted: ${credentials.email}`),
      onForgotPassword: () => alert("Forgot password clicked"),
      onRegister: () => alert("Register clicked"),
    },
  },
};

export const CustomStyles: Story = {
  args: {
    styles: {
      card: { borderRadius: "16px", padding: "3rem 2.5rem" },
      submitButton: { borderRadius: "999px", backgroundColor: "#7c3aed" },
      title: { fontSize: "2rem", color: "#7c3aed" },
    },
  },
};
