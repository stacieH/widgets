import type { LoginErrorMessages, LoginValidations, LoginCredentials } from "./login-component";

export interface LoginFormState {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

export interface UseLoginOptions {
  validations?: LoginValidations;
  errorMessages?: LoginErrorMessages;
  onSubmit?: (credentials: LoginCredentials) => void;
}
