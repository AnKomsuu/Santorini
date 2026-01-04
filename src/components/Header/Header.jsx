import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { TbMenu, TbX } from "react-icons/tb";
import { FiUser, FiPhone, FiSun, FiMoon } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

import santorini from "../../assets/santorini.svg";
import SearchPanel from "../SearchPanel/SearchPanel";

const navLinksInfo = [
  { id: 1, path: "/rooms", title: "Номера" },
  { id: 2, path: "/services", title: "Услуги" },
  { id: 3, path: "/specials", title: "Акции" },
  { id: 4, path: "/news", title: "Блог" },
  { id: 5, path: "/reviews", title: "Отзывы" },
  { id: 6, path: "/contact", title: "Контакты" },
];

const Header = ({ isSearchOpen, onSearchClose }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setMenuOpen(false);
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/0 dark:bg-[#0f172a]/0 py-5" /* Прозрачный фон в начале */
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Логотип и Бургер */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-slate-800 dark:text-white hover:text-blue-600 transition-colors"
              aria-label="Меню"
            >
              {isMenuOpen ? <TbX size={28} /> : <TbMenu size={28} />}
            </button>
            
            <Link to="/" className="block">
              <img 
                src={santorini} 
                alt="Santorini" 
                // Логотип: Цветной на белом фоне, Белый на темном фоне
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "dark:brightness-0 dark:invert" : "brightness-0 invert drop-shadow-md md:filter-none"
                }`}
              />
            </Link>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {navLinksInfo.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors relative group ${
                   isScrolled ? "text-slate-800 dark:text-gray-200" : "text-slate-800 dark:text-white text-shadow-sm"
                }`}
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-x-5">
            <button
              onClick={toggleTheme}
              className={`hidden md:flex hover:text-blue-500 transition-colors ${
                isScrolled ? "text-slate-800 dark:text-white" : "text-slate-800 dark:text-white"
              }`}
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {isAuth ? (
              <Link
                to="/profile"
                className={`hover:text-blue-500 transition-colors ${
                  isScrolled ? "text-slate-800 dark:text-white" : "text-slate-800 dark:text-white"
                }`}
              >
                <FiUser size={22} />
              </Link>
            ) : (
              <Link
                to="/login"
                className={`hidden md:block text-sm font-bold uppercase tracking-wide hover:text-blue-500 ${
                   isScrolled ? "text-slate-800 dark:text-white" : "text-slate-800 dark:text-white"
                }`}
              >
                Войти
              </Link>
            )}

            {/* Кнопка БРОНЬ: Синяя в светлой теме, Белая в темной */}
            <Link
              to="/booking"
              className="flex items-center gap-x-2 px-6 py-2.5 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5
                         bg-[#1e40af] text-white hover:bg-[#1e3a8a]
                         dark:bg-white dark:text-[#0f172a] dark:hover:bg-gray-200"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Бронь</span>
              <BsArrowUpRight strokeWidth={1} />
            </Link>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white dark:bg-[#0f172a] shadow-2xl transform transition-transform duration-300 ease-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={santorini} alt="Santorini" className="h-8 dark:brightness-0 dark:invert" />
            <div className="flex items-center gap-x-4">
              <button onClick={toggleTheme} className="text-slate-800 dark:text-white">
                {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
              </button>
              <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400">
                <TbX size={26} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 overflow-y-auto flex-grow">
            {navLinksInfo.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-lg font-serif font-bold text-slate-800 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800 pb-3"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/specials"
              className="text-lg font-serif font-bold text-blue-600 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-3"
              onClick={() => setMenuOpen(false)}
            >
              Спецпредложения
            </Link>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-800">
            <a href="tel:89120388044" className="flex items-center gap-x-3 text-lg font-medium text-slate-800 dark:text-white mb-4">
              <FiPhone className="text-blue-600" />
              8 (912) 038-80-44
            </a>
            {!isAuth && (
              <Link
                to="/login"
                className="block w-full text-center border-2 border-[#1e40af] text-[#1e40af] dark:border-white dark:text-white py-3 rounded uppercase font-bold text-xs tracking-widest hover:bg-[#1e40af] hover:text-white dark:hover:bg-white dark:hover:text-[#0f172a] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Войти в аккаунт
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <SearchPanel isOpen={isSearchOpen} onClose={onSearchClose} />
    </>
  );
};

export default Header;