import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./AuthPage.module.css";

export default function AuthPage() {
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/";

  const handleError = (e) => {
    if (e?.status === 0)
      return "Сервер недоступний. Перевірте інтернет або спробуйте пізніше.";

    switch (e?.status) {
      case 400:
      case 422:
        return "Некоректні дані форми.";
      case 401:
        return "Невірний email або пароль.";
      case 404:
        return "Користувача не знайдено.";
      case 409:
        return "Користувач з таким email вже існує.";
      case 500:
      case 502:
      case 503:
      case 504:
        return "Помилка сервера. Спробуйте пізніше.";
      default:
        return e?.message || "Сталася невідома помилка.";
    }
  };

  const doLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(redirectTo, { replace: true });
    } catch (e) {
      setError(handleError(e));
    } finally {
      setLoading(false);
    }
  };

  const doRegister = async () => {
    setError("");
    setLoading(true);
    try {
      await register(email, password, "User");
      navigate(redirectTo, { replace: true });
    } catch (e) {
      setError(handleError(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.page}>
      <div className={css.card}>
        {error && (
          <div className={css.error} role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <input
          className={css.input}
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={css.input}
          placeholder="Пароль"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={css.buttons}>
          <button
            className={css.primaryBtn}
            onClick={doLogin}
            disabled={loading}
          >
            Вхід
          </button>
          <button
            className={css.secondaryBtn}
            onClick={doRegister}
            disabled={loading}
          >
            Реєстрація
          </button>
        </div>
      </div>
    </div>
  );
}
