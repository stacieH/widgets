import type { LoginErrorMessages } from "../types/login-component";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DEFAULT_ERRORS: Required<Omit<LoginErrorMessages, "passwordTooShort">> & {
  passwordTooShort: (min: number) => string;
} = {
  emailRequired: "Email is required.",
  emailInvalid: "Enter a valid email address.",
  passwordRequired: "Password is required.",
  passwordTooShort: (min) => `Password must be at least ${min} characters.`,
};
