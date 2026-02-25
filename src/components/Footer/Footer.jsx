import santorini from "../../assets/santorini.svg";
import { FaPhoneAlt } from "react-icons/fa";
import vk from "../../assets/VK.svg";
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
    {
      id: 4,
      path: "/",
      title: "Экстрим",
      state: { category: "Экстрим" },
    },
    {
      id: 5,
      path: "/",
      title: "Морские прогулки",
      state: { category: "Морские прогулки" },
    },
    {
      id: 6,
      path: "/",
      title: "Рыбалка",
      state: { category: "Рыбалка" },
    },
    { id: 7, path: "/specials", title: "Спецпредложения" },
  ];

  return (
    <div
      id="main-header"
      className="container mt-20 md:mt-40 pt-8 md:pt-12.5 pb-6 md:pb-10 border-t-2 border-theme-blue"
    >
      <div className="pt-8 md:pt-15 pb-4 md:pb-7 px-4 md:pl-30 md:pr-15">
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-13 gap-8 md:gap-0">
          <img className="theme-logo w-32 md:w-auto" src={santorini} alt="Santorini Hotel" />
          <div className="md:w-90 md:ml-21">
            <p className="flex text-theme-blue items-center mb-2 gap-x-2">
              <FaPhoneAlt />
              8(912) 038-80-44
            </p>
            <p className="text-sm md:text-base">
              298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
            </p>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8 lg:gap-x-16 w-full md:w-auto">
            <div className="leading-8 md:leading-9 flex flex-col uppercase text-sm md:text-base">
              {info.map((item) => (
                <Link key={item.title} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="leading-8 md:leading-9 flex flex-col uppercase text-sm md:text-base">
              {place.map((item) => (
                <Link key={item.id} state={item.state} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm md:text-base">&copy; 2022 Cанторини. Все права защищены.</p>
          <div className="flex gap-x-6 md:gap-x-10">
            <a
              href="https://vk.com/video-226154244_456239053"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8 md:w-10" src={vk} alt="VK" />
            </a>
            <a
              href="https://youtu.be/j-iheFkstFQ"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8 md:w-10" src={youtube} alt="YouTube" />
            </a>
            <a
              href="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8 md:w-10" src={zen} alt="Дзен" />
            </a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
            className="text-sm md:text-base"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
