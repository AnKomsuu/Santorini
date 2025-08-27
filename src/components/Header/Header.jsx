import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { useTheme } from "../../context/ThemeContext";
import { TbMenu } from "react-icons/tb";
import { useAuth } from "../../context/AuthContext";
import { FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import santorini from "../../assets/santorini.svg";
import mode from "../../assets/mode.svg";
import vk from "../../assets/vk.svg";
import youtube from "../../assets/YouTube.svg";
import zen from "../../assets/zen.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SearchPanel from "../SearchPanel/SearchPanel";

const Header = ({ isSearchOpen, onSearchClose }) => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const { isAuth, user, logout } = useAuth();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });
  const info = [
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
  const place = [
    { id: 1, path2: "/attractionsPage", title: "Достопримечательности" },
    { id: 2, path2: "/pastaBarPage", title: "паста-бар" },
    { id: 3, path2: "/recreation", title: "Активный отдых" },
    { id: 4, path2: "/specials", title: "Спецпредложения" },
  ];
  return (
    <>
      <header id="main-header" className="sticky top-0 z-50 py-6 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-x-10">
              <button onClick={() => setOpen(!isOpen)}>
                {isOpen ? (
                  <IoMdClose className="text-4xl text-bg-blue cursor-pointer" />
                ) : (
                  <TbMenu className="text-4xl theme-icon text-bg-blue cursor-pointer" />
                )}
              </button>
              <Link to="/">
                <img
                  className="theme-logo"
                  src={santorini}
                  alt="Santorini Logo"
                />
              </Link>

              {isAuth ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center text-3xl gap-x-2 font-medium hover:text-bg-blue"
                  >
                    <FiUser />
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="uppercase bg-bg-blue text-white px-6 py-3 rounded-md font-medium flex items-center gap-x-2"
                >
                  Войти <BsArrowUpRight />
                </Link>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="absolute left-1/2 -translate-x-1/2 -bottom-12 p-5 theme-mode cursor-pointer rounded-full shadow-lg bg-white"
            >
              <img src={mode} alt="Кнопка" className="w-12 h-12 z-50" />
            </button>

            <Link
              to="/booking"
              className="uppercase bg-bg-blue text-white w-56 py-4 cursor-pointer
                       flex items-center gap-x-3 justify-center font-medium
                       hover:bg-blue-800 transition-colors"
            >
              забронировать
              <BsArrowUpRight className="text-xl" />
            </Link>
          </div>
          <div
            id="side-menu"
            ref={menuRef}
            className={`absolute w-160 h-159 text-lg top-26 border-r-3 border-bg-blue left-0 bg-white transform transition-transform duration-300 ease-in-out
             ${isOpen ? "translate-x-0" : "-translate-x-full"}
            }`}
          >
            <div className="flex justify-around items-baseline">
              <div className="leading-14 flex flex-col uppercase">
                {info.map((item, idx) => (
                  <Link
                    to={item.path}
                    key={idx}
                    className={`hover:text-red-500${
                      idx >= 2 && idx <= 5 ? " hover:text-red-500" : ""
                    }`}
                    href=""
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="leading-16 flex flex-col uppercase">
                {place.map((item, index) => (
                  <Link
                    to={item.path2}
                    key={index}
                    className="hover:text-red-500"
                    href=""
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  className="uppercase bg-bg-blue text-white w-56 cursor-pointer
                       flex items-center gap-x-3 justify-center mt-42"
                >
                  забронировать
                  <BsArrowUpRight className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="mt-5 pt-3 uppercase flex text-theme-blue justify-around border-t-2 border-theme-blue">
              <div>
                <p className="flex items-center mb-3 gap-x-2">
                  <FaPhoneAlt />
                  8(912) 038-80-44
                </p>
                <div className="flex justify-between items-center gap-x-3">
                  <a
                    href="https://vk.com/video-226154244_456239053"
                    target="https://vk.com/video-226154244_456239053"
                  >
                    <img className="w-8" src={vk} alt="" />
                  </a>
                  <a
                    href="https://youtu.be/j-iheFkstFQ"
                    target="https://youtu.be/j-iheFkstFQ"
                  >
                    <img className="w-9" src={youtube} alt="" />
                  </a>
                  <a
                    href="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607"
                    target="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607"
                  >
                    <img className="w-8" src={zen} alt="" />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                298690, Россия, Крым, г. Ялта, пгт <br /> Форос, Форосский
                спуск, 1
              </p>
            </div>
          </div>
        </div>
        <SearchPanel isOpen={isSearchOpen} onClose={onSearchClose} />
      </header>
    </>
  );
};

export default Header;
