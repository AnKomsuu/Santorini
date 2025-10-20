import santorini from "../../assets/santorini.svg";
import { FaPhoneAlt } from "react-icons/fa";
import vk from "../../assets/vk.svg";
import youtube from "../../assets/YouTube.svg";
import zen from "../../assets/zen.svg";
import { Link } from "react-router-dom";

const Footer = () => {
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
    { id: 1, path: "/attractionsPage", title: "Достопримечательности" },
    { id: 2, path: "/pastaBarPage", title: "паста-бар" },
    { id: 3, path: "/recreation", title: "Активный отдых" },
    { id: 4, path: "/", title: "Экстрим", state: { category: "Экстрим" } },
    { id: 5, path: "/", title: "Морские прогулки", state: { category: "Морские прогулки" } },
    { id: 6, path: "/", title: "Рыбалка", state: { category: "Рыбалка" } },
    { id: 7, path: "/specials", title: "Спецпредложения" },
  ];

  return (
    <footer className="container mt-20 md:mt-40 pt-12 pb-10 border-t-2 border-theme-blue">
      <div className="px-4 py-8 md:px-8 lg:px-12">
        {/* Верхний блок: Лого, адрес и навигация */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-10 lg:gap-20 mb-12">
          {/* Левая часть: Лого и контакты */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0">
            <img className="theme-logo" src={santorini} alt="Логотип Санторини" />
            <div className="mt-4 max-w-xs">
              <a href="tel:89120388044" className="flex items-center justify-center lg:justify-start text-theme-blue mb-2 gap-x-2 hover:text-opacity-80 transition-colors">
                <FaPhoneAlt />
                8(912) 038-80-44
              </a>
              <p>
                298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
              </p>
            </div>
          </div>

          {/* Правая часть: Колонки с ссылками */}
          <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-10 sm:gap-16">
            <div className="leading-9 flex flex-col uppercase">
              {info.map((item) => (
                <Link key={item.id} to={item.path} className="hover:text-theme-blue transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="leading-9 flex flex-col uppercase">
              {place.map((item) => (
                <Link key={item.id} state={item.state} to={item.path} className="hover:text-theme-blue transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Нижний блок: Копирайт, соцсети и политика */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left text-sm text-gray-500">
            © 2022 Cанторини. Все права защищены.
          </p>
          <div className="flex gap-x-6">
            <a href="https://vk.com/video-226154244_456239053" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-80 transition-opacity" src={vk} alt="Вконтакте" />
            </a>
            <a href="https://youtu.be/j-iheFkstFQ" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-80 transition-opacity" src={youtube} alt="YouTube" />
            </a>
            <a href="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 hover:opacity-80 transition-opacity" src={zen} alt="Дзен" />
            </a>
          </div>
          <a
            href="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center md:text-left text-sm text-gray-500 hover:text-theme-blue transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;