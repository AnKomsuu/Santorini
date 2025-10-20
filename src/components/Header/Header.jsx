import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { TbMenu } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import santorini from "../../assets/santorini.svg";
import mode from "../../assets/mode.svg";
import vk from "../../assets/vk.svg";
import youtube from "../../assets/YouTube.svg";
import zen from "../../assets/zen.svg";
import SearchPanel from "../SearchPanel/SearchPanel";

const navLinksInfo = [
  { id: 1, path: "/rooms", title: "Номера и цены" },
  { id: 2, path: "/about", title: "Об отеле" },
  { id: 3, path: "/services", title: "Услуги" },
  { id: 4, path: "/rulesPage", title: "Условия проживания" },
  { id: 5, path: "/news", title: "Новости" },
  { id: 6, path: "/contact", title: "контакты" },
  { id: 7, path: "/photoHotel", title: "Фото отеля" },
  { id: 8, path: "/road", title: "Как добраться" },
  { id: 9, path: "/reviews", title: "Отзывы гостей" },
];

const navLinksPlace = [
  { id: 1, path: "/attractionsPage", title: "Достопримечательности" },
  { id: 2, path: "/pastaBarPage", title: "паста-бар" },
  { id: 3, path: "/recreation", title: "Активный отдых" },
  { id: 4, path: "/specials", title: "Спецпредложения" },
];

const Header = ({ isSearchOpen, onSearchClose }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const { isAuth } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setMenuOpen(false);
  });

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setMenuOpen(newMenuState);
    document.body.style.overflow = newMenuState ? 'hidden' : '';
  };

  const NavLink = ({ to, children }) => (
    <Link to={to} className="hover:text-red-500 transition-colors uppercase">
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 py-4 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4 md:gap-x-8">
            <button onClick={toggleMenu} aria-label="Открыть меню" aria-expanded={isMenuOpen} aria-controls="side-menu">
              {isMenuOpen ? <IoMdClose className="text-3xl" /> : <TbMenu className="text-3xl" />}
            </button>
            <Link to="/" aria-label="На главную">
              <img className="w-28 md:w-36" src={santorini} alt="Логотип Santorini" />
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            {isAuth ? (
              <Link to="/profile" className="text-2xl hover:text-bg-blue transition-colors" aria-label="Профиль пользователя">
                <FiUser />
              </Link>
            ) : (
              <Link to="/login" className="hidden md:flex items-center gap-x-2 bg-bg-blue text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-800 transition-colors uppercase">
                Войти <BsArrowUpRight />
              </Link>
            )}
            <Link to="/booking" className="flex items-center justify-center gap-x-2 bg-bg-blue text-white px-4 py-2.5 md:px-6 rounded-md font-medium hover:bg-blue-800 transition-colors uppercase text-sm md:text-base">
              <span className="hidden md:inline">забронировать</span>
              <span className="md:hidden">Бронь</span>
              <BsArrowUpRight className="text-lg" />
            </Link>
          </div>
        </div>

        <button onClick={toggleTheme} className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full p-3 theme-mode rounded-full shadow-lg bg-white hover:bg-gray-100 transition-colors" aria-label="Сменить тему">
          <img src={mode} alt="Смена темы" className="w-10 h-10" />
        </button>

        <nav
          id="side-menu"
          ref={menuRef}
          className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-40 md:absolute md:w-[40rem] md:h-auto md:top-full md:rounded-br-lg md:shadow-lg ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow p-8 pt-24 md:p-10 overflow-y-auto">
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left text-lg">
                <div className="flex flex-col gap-y-5 leading-relaxed">
                  {navLinksInfo.map((item) => <NavLink key={item.id} to={item.path}>{item.title}</NavLink>)}
                </div>
                <div className="flex flex-col gap-y-5 leading-relaxed">
                  {navLinksPlace.map((item) => <NavLink key={item.id} to={item.path}>{item.title}</NavLink>)}
                  {!isAuth && (
                    <Link to="/login" className="md:hidden flex items-center justify-center gap-x-2 bg-bg-blue text-white px-6 py-3 mt-4 rounded-md font-medium hover:bg-blue-800 transition-colors uppercase">
                      Войти <BsArrowUpRight />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 p-6 border-t-2 border-theme-blue flex flex-col md:flex-row justify-between items-center gap-6 text-theme-blue">
              <div className="text-center md:text-left">
                <a href="tel:89120388044" className="flex items-center justify-center md:justify-start gap-x-2 mb-2 hover:text-opacity-80 transition-opacity">
                  <FaPhoneAlt />
                  8(912) 038-80-44
                </a>
                <div className="flex items-center justify-center md:justify-start gap-x-4">
                  <a href="https://vk.com" target="_blank" rel="noopener noreferrer"><img className="w-7 h-7 hover:opacity-80 transition-opacity" src={vk} alt="Вконтакте" /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img className="w-7 h-7 hover:opacity-80 transition-opacity" src={youtube} alt="YouTube" /></a>
                  <a href="https://dzen.ru" target="_blank" rel="noopener noreferrer"><img className="w-7 h-7 hover:opacity-80 transition-opacity" src={zen} alt="Дзен" /></a>
                  <button onClick={toggleTheme} className="lg:hidden" aria-label="Сменить тему"><img src={mode} alt="Смена темы" className="w-7 h-7" /></button>
                </div>
              </div>
              <p className="text-sm text-center md:text-left max-w-xs">
                298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
              </p>
            </div>
          </div>
        </nav>
      </div>
      <SearchPanel isOpen={isSearchOpen} onClose={onSearchClose} />
    </header>
  );
};

export default Header;