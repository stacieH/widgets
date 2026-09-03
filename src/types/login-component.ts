import React from "react";

export interface LoginLabels {
  email?: string;
  password?: string;
}

export interface LoginPlaceholders {
  email?: string;
  password?: string;
}

export interface LoginText {
  title?: string;
  subtitle?: string;
  submitButton?: string;
  forgotPassword?: string;
  registerPrompt?: string;
  registerLink?: string;
  successMessage?: string;
  divider?: string;
}

export interface LoginValidations {
  passwordMinLength?: number;
}

export interface LoginErrorMessages {
  emailRequired?: string;
  emailInvalid?: string;
  passwordRequired?: string;
  passwordTooShort?: string | ((minLength: number) => string);
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginEvents {
  onSubmit?: (credentials: LoginCredentials) => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

export interface LoginIcons {
  email?: React.ReactNode;
  password?: React.ReactNode;
}

export interface LoginSocialProvider {
  id: string;
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export interface LoginStyles {
  wrapper?: React.CSSProperties;
  card?: React.CSSProperties;
  title?: React.CSSProperties;
  subtitle?: React.CSSProperties;
  label?: React.CSSProperties;
  inputWrapper?: React.CSSProperties;
  input?: React.CSSProperties;
  submitButton?: React.CSSProperties;
  forgotButton?: React.CSSProperties;
  errorText?: React.CSSProperties;
  divider?: React.CSSProperties;
  socialButton?: React.CSSProperties;
  registerText?: React.CSSProperties;
}

export type LoginTheme = "light" | "dark";

export interface LoginProps {
  labels?: LoginLabels;
  placeholders?: LoginPlaceholders;
  text?: LoginText;
  validations?: LoginValidations;
  errorMessages?: LoginErrorMessages;
  events?: LoginEvents;
  styles?: LoginStyles;
  theme?: LoginTheme;
  icons?: LoginIcons;
  social?: LoginSocialProvider[];
  showPasswordToggle?: boolean;
}
