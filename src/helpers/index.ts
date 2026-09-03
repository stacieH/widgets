import { DEFAULT_ERRORS, EMAIL_REGEX } from "../constants";
import type { LoginErrorMessages } from "../types/login-component";
import type { LoginFormErrors, LoginFormState } from "../types/login-hook";

export function validate(
  values: LoginFormState,
  errorMessages: LoginErrorMessages,
  minLength: number
): LoginFormErrors {
  const errors: LoginFormErrors = {};

  if (!values.email.trim()) {
    errors.email = errorMessages.emailRequired ?? DEFAULT_ERRORS.emailRequired;
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = errorMessages.emailInvalid ?? DEFAULT_ERRORS.emailInvalid;
  }

  if (!values.password) {
    errors.password = errorMessages.passwordRequired ?? DEFAULT_ERRORS.passwordRequired;
  } else if (values.password.length < minLength) {
    const msg = errorMessages.passwordTooShort ?? DEFAULT_ERRORS.passwordTooShort;
    errors.password = typeof msg === "function" ? msg(minLength) : msg;
  }

  return errors;
}
