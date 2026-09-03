import { useState, useCallback } from "react";
import { validate } from "../helpers";
import type { LoginFormErrors, LoginFormState, UseLoginOptions } from "../types/login-hook";

const useLogin = (options: UseLoginOptions = {}) => {
  const { validations = {}, errorMessages = {}, onSubmit } = options;
  const minLength = validations.passwordMinLength ?? 8;

  const [values, setValues] = useState<LoginFormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof LoginFormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(() => setShowPassword((v) => !v), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const next = { ...values, [name]: value };
      setValues(next);
      if (touched[name as keyof LoginFormState]) {
        setErrors((prev) => ({ ...prev, ...validate(next, errorMessages, minLength) }));
      }
    },
    [values, touched, errorMessages, minLength]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, ...validate(values, errorMessages, minLength) }));
    },
    [values, errorMessages, minLength]
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationErrors = validate(values, errorMessages, minLength);
      setErrors(validationErrors);
      setTouched({ email: true, password: true });
      if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        onSubmit?.(values);
      }
    },
    [values, errorMessages, minLength, onSubmit]
  );

  return {
    values,
    errors,
    touched,
    submitted,
    showPassword,
    togglePassword,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useLogin;
