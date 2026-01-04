import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputMask from "react-input-mask";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);

  const showPassword = () => {
    setEye(!eye);
  };
  const showPassword2 = () => {
    setEye2(!eye2);
  };
  const { register } = useAuth();

  const handleNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[а-яА-ЯЁёa-zA-Z]*$/;

    if (regex.test(value)) {
      setName(value);

      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: undefined }));
      }
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    const nameRegex = /^[а-яА-ЯЁёa-zA-Z -]{2,}$/;
    if (!nameRegex.test(name.trim())) {
      if (!name.trim()) {
        newErrors.name = "Пожалуйста, введите ваше имя.";
      } else if (name.trim().length < 2) {
        newErrors.name = "Имя должно содержать минимум 2 буквы.";
      }
    }

    if (!email.trim()) {
      newErrors.email = "Пожалуйста, введите ваш email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Введите корректный email-адрес.";
    }

    const phoneRegex =
      /^\+996(?:22[0-9]|50[0-9]|55[0-9]|70[0-9]|755|77[0-9]|99[0-9])\d{6}$/;

    const cleanPhone = phone.replace(/[\s()-]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Неверный код оператора (KG).";
    }
    if (!phone.trim() || phone.includes("_")) {
      newErrors.phone = "Пожалуйста, введите ваш номер телефона.";
    }

    if (!password) {
      newErrors.password = "Пожалуйста, придумайте пароль.";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов.";
    } else if (/\s/.test(password)) {
      newErrors.password = "Пароль не должен содержать пробелов.";
    } else if (!/[A-ZА-ЯЁ]/.test(password)) {
      newErrors.password =
        "Пароль должен содержать хотя бы одну заглавную букву.";
    } else if ((password.match(/\d/g) || []).length < 2) {
      newErrors.password = "Пароль должен содержать минимум две цифры.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Пожалуйста, повторите ваш пароль.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const userData = { name, email, phone, password };

    const result = await register(userData);

    if (!result.success) {
      setErrors({ general: result.message });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-img">
      <div className="w-full max-w-md p-8 space-y-6 text-white bg-orange-400 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center italic">
          Создать аккаунт
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          className="space-y-4"
        >
          <div>
            <label className="">Ваше имя</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full bg-theme-login outline-none text-black pl-3 py-1 rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-theme-login outline-none text-black pl-3 py-1 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label>Телефон</label>
            <InputMask
              mask="+\9\96 (999) 999-999"
              value={phone}
              onChange={handlePhoneChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="tel"
                  className="w-full bg-theme-login outline-none text-black pl-3 py-1 rounded-lg"
                />
              )}
            </InputMask>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="relative">
            <label>Пароль</label>
            <input
              type={eye ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-theme-login outline-none text-black pl-3 py-1 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            {password.length > 0 && (
              <button
                type="button"
                onClick={showPassword}
                className="absolute right-5 bottom-1.5 text-black"
              >
                {eye ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            )}
          </div>

          <div className="relative">
            <label>Подтвердите пароль</label>
            <input
              type={eye2 ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-theme-login outline-none text-black pl-3 py-1 rounded-lg"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
            {confirmPassword.length > 0 && (
              <button
                type="button"
                onClick={showPassword2}
                className="absolute right-5 bottom-1.5 text-black"
              >
                {eye2 ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-center text-sm">{errors.general}</p>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="bg-bg-blue px-8 py-4 uppercase font-semibold rounded-md"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>

        <p className="text-center text-lg">
          Уже есть аккаунт?
          <Link className="ml-5 text-xl hover:text-bg-blue" to="/login">
            Войти
          </Link>
        </p>
        <div className="text-right">
          <Link to="/" className="hover:text-bg-blue underline">
            Вернуться в главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
