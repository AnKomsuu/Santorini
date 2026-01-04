import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);

  const showPassword = () => {
    setEye(!eye);
  };
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-50 ">
      <div className="w-full max-w-md p-8 space-y-8 bg-orange-400 text-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic">Вход в Santorini</h2>
          <p className="mt-2">
            Войдите в свой аккаунт, чтобы увидеть историю бронирований.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-theme-login outline-none text-black pl-3 py-3 rounded-lg"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-lg font-medium">
              Пароль
            </label>
            <input
              id="password"
              type={eye ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-theme-login outline-none text-black pl-3 py-3 rounded-lg"
            />
            {password.length > 0 && (
              <button
                type="button"
                onClick={showPassword}
                className="absolute right-5 bottom-3.5 text-black"
              >
                {eye ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            )}
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="text-center">
            <button
              type="submit"
              className="bg-bg-blue px-10 py-4 uppercase font-semibold rounded-md"
            >
              Войти
            </button>
          </div>
        </form>

        <p className="text-center">
          Еще нет аккаунта?
          <Link
            to="/register"
            className="font-medium ml-4 text-lg hover:text-bg-blue hover:text-dark-blue"
          >
            Зарегистрироваться
          </Link>
        </p>
        <div className="text-right">
          <Link to="/" className="hover:text-bg-blue underline">
            В главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
