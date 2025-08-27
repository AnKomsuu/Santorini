import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        let usersInStorage = localStorage.getItem("usersDb");

        if (!usersInStorage) {
          const response = await axios.get("/db.json");
          if (response.data && response.data.users) {
            localStorage.setItem(
              "usersDb",
              JSON.stringify(response.data.users)
            );
          }
        }

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Ошибка инициализации:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (email, password) => {
    const usersDb = JSON.parse(localStorage.getItem("usersDb") || "[]");
    const foundUser = usersDb.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password, ...userToSave } = foundUser;
      setUser(userToSave);
      localStorage.setItem("user", JSON.stringify(userToSave));
      alert(`Добро пожаловать, ${userToSave.name}!`);
      navigate("/");
      return { success: true };
    } else {
      return { success: false, message: "Неверный email или пароль" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const register = (userData) => {
    const usersDb = JSON.parse(localStorage.getItem("usersDb") || "[]");

    const isEmailTaken = usersDb.some((u) => u.email === userData.email);
    if (isEmailTaken) {
      return { success: false, message: "Этот email уже используется." };
    }
    const isNameTaken = usersDb.some((u) => u.name === userData.name);
    if (isNameTaken) {
      return { success: false, message: "Это имя уже занято." };
    }
    const newUser = { id: Date.now(), ...userData };

    const updatedUsersDb = [...usersDb, newUser];

    localStorage.setItem("usersDb", JSON.stringify(updatedUsersDb));

    alert("Регистрация прошла успешно! Теперь вы можете войти.");
    navigate("/login");
    return { success: true };
  };

  const value = { user, isAuth: !!user, loading, login, logout, register };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
