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
    <>
      <div
        id="main-header"
        className="container mt-40 pt-12.5 pb-10 border-t-2 border-theme-blue"
      >
        <div className="pt-15 pb-7 pl-30 pr-15">
          <div className="flex items-start mb-13">
            <img className="theme-logo" src={santorini} alt="" />
            <div className="w-90 ml-21">
              <p className="flex text-theme-blue items-center mb-2 gap-x-2">
                <FaPhoneAlt />
                8(912) 038-80-44
              </p>
              <p>
                298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
              </p>
            </div>
            <div className="leading-9 flex flex-col uppercase mr-10">
              {info.map((item) => (
                <Link key={item.title} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="leading-9 flex flex-col uppercase">
              {place.map((item) => (
                <Link key={item.id} state={item.state} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>© 2022 Cанторини. Все права защищены.</p>
            <div className="flex gap-x-10">
              <a
                href="https://vk.com/video-226154244_456239053"
                target="https://vk.com/video-226154244_456239053"
              >
                <img className="w-10" src={vk} alt="" />
              </a>
              <a
                href="https://youtu.be/j-iheFkstFQ"
                target="https://youtu.be/j-iheFkstFQ"
              >
                <img className="w-10" src={youtube} alt="" />
              </a>
              <a
                href="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607"
                target="https://dzen.ru/video/watch/686676736777d3671a5c2813?sid=544742401204260607"
              >
                <img className="w-10" src={zen} alt="" />
              </a>
            </div>
            <a
              target="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
              href="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
