import EyeOffIcon from "../Icons/EyeOffIcon";
import EyeIcon from "../Icons/EyeIcon";
import useLogin from "../../hooks/useLogin";
import "./login.css";
import type { LoginProps } from "../../types/login-component";

const Login = ({
  labels = {},
  placeholders = {},
  text = {},
  validations = {},
  errorMessages = {},
  events = {},
  styles = {},
  theme = "light",
  icons = {},
  social,
  showPasswordToggle = false,
}: LoginProps) => {
  const {
    values,
    errors,
    touched,
    submitted,
    showPassword,
    togglePassword,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useLogin({
    validations,
    errorMessages,
    onSubmit: events.onSubmit,
  });

  const { email: emailLabel = "Email id", password: passwordLabel = "Password" } = labels;
  const {
    email: emailPlaceholder = "joe@email.com",
    password: passwordPlaceholder = "Enter your Password",
  } = placeholders;
  const {
    title = "Log in",
    subtitle,
    submitButton = "Login",
    forgotPassword = "forgot password?",
    registerPrompt = "Don't have an account?",
    registerLink = "Register here",
    successMessage = "Logged in successfully!",
    divider = "OR",
  } = text;

  const hasSocial = social && social.length > 0;

  return (
    <div className={`login-wrapper login-wrapper--${theme}`} style={styles.wrapper}>
      <div className="login-card" style={styles.card}>
        <h1 className="login-title" style={styles.title}>
          {title}
        </h1>
        {subtitle && (
          <p className="login-subtitle" style={styles.subtitle}>
            {subtitle}
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="login-field">
            <label className="login-label" htmlFor="email" style={styles.label}>
              {emailLabel}
            </label>
            <div
              className={`login-input-wrapper${icons.email ? " login-input-wrapper--icon" : ""}${touched.email && errors.email ? " login-input-wrapper--error" : ""}`}
              style={styles.inputWrapper}
            >
              {icons.email && <span className="login-input-icon">{icons.email}</span>}
              <input
                id="email"
                name="email"
                type="email"
                className={`login-input${icons.email ? " login-input--has-icon" : ""}${touched.email && errors.email ? " login-input--error" : ""}`}
                placeholder={emailPlaceholder}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                style={styles.input}
              />
            </div>
            {touched.email && errors.email && (
              <span className="login-error" role="alert" style={styles.errorText}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="login-field">
            <label className="login-label" htmlFor="password" style={styles.label}>
              {passwordLabel}
            </label>
            <div
              className={[
                "login-input-wrapper",
                icons.password || showPasswordToggle ? "login-input-wrapper--icon" : "",
                touched.password && errors.password ? "login-input-wrapper--error" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={styles.inputWrapper}
            >
              {icons.password && <span className="login-input-icon">{icons.password}</span>}
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className={[
                  "login-input",
                  icons.password || showPasswordToggle ? "login-input--has-icon" : "",
                  touched.password && errors.password ? "login-input--error" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                placeholder={passwordPlaceholder}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                style={styles.input}
              />
              {showPasswordToggle && (
                <button
                  type="button"
                  className="login-toggle-btn"
                  onClick={togglePassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              )}
            </div>
            {touched.password && errors.password && (
              <span className="login-error" role="alert" style={styles.errorText}>
                {errors.password}
              </span>
            )}
          </div>

          {/* Forgot password */}
          <div className="login-forgot-row">
            <button
              type="button"
              className="login-forgot"
              onClick={events.onForgotPassword}
              style={styles.forgotButton}
            >
              {forgotPassword}
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="login-submit" style={styles.submitButton}>
            {submitButton}
          </button>

          {submitted && <p className="login-success">{successMessage}</p>}

          {/* Divider + Social */}
          {hasSocial && (
            <>
              <div className="login-divider" style={styles.divider}>
                <span>{divider}</span>
              </div>
              <div className="login-social-row">
                {social!.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    className="login-social-btn"
                    aria-label={provider.label ?? provider.id}
                    onClick={provider.onClick}
                    style={styles.socialButton}
                  >
                    {provider.icon}
                  </button>
                ))}
              </div>
            </>
          )}
        </form>

        <p className="login-register" style={styles.registerText}>
          {registerPrompt}{" "}
          <a
            href={events.onRegister ? undefined : "/register"}
            onClick={events.onRegister}
            role={events.onRegister ? "button" : undefined}
          >
            {registerLink}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
