import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import fon from "../../assets/rulesPageFon.jpg";
import {
  FaClock,
  FaChild,
  FaPaw,
  FaRegCreditCard,
  FaRegCalendarTimes,
  FaRegLifeRing,
} from "react-icons/fa";
import { MdSmokeFree } from "react-icons/md";

const rulesData = [
  {
    icon: <FaRegCreditCard />,
    title: "Порядок бронирования и оплаты",
    text: "Бронирование номера считается гарантированным после внесения предоплаты в размере стоимости одних суток проживания. Полная оплата производится в день заезда. Мы принимаем к оплате наличные рубли и банковские карты VISA, MasterCard, МИР.",
  },
  {
    icon: <FaRegCalendarTimes />,
    title: "Правила отмены бронирования",
    text: "При отмене бронирования за 14 и более дней до даты заезда предоплата возвращается в полном объеме. При отмене в срок от 7 до 14 дней удерживается 50% от суммы предоплаты. При отмене менее чем за 7 дней предоплата не возвращается.",
  },
  {
    icon: <MdSmokeFree />,
    title: "Порядок проживания в номере",
    text: "Просим вас соблюдать тишину и уважать право на отдых других гостей, особенно в период с 23:00 до 08:00. Курение строго запрещено в номерах, на балконах и в общественных зонах.",
  },
  {
    icon: <FaRegLifeRing />,
    title: "Безопасность и ответственность",
    text: "Администрация отеля не несет ответственности за ценные вещи, деньги и документы, оставленные вне сейфа. Просим соблюдать правила пожарной безопасности.",
  },
];

const RulesPage = () => {
  return (
    <>
      <Helmet>
        <title>Правила проживания — Santorini Hotel</title>
        <meta name="description" content="Правила проживания в отеле Santorini — заезд, выезд, бронирование и условия пребывания." />
      </Helmet>
      <section className="relative w-full max-w-[1512px] mx-auto h-48 sm:h-72 md:h-[400px]">
        <img className="w-full h-full object-cover" src={fon} alt="Правила проживания" />
        <div className="text-center absolute text-white bottom-8 md:bottom-40 left-4 md:left-[25%] right-4 md:right-auto">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif">Правила проживания</h2>
          <p className="mt-4 md:mt-8 text-sm md:text-xl max-w-2xl mx-auto">
            Для вашего комфорта и безопасности, просим ознакомиться с нашими
            правилами.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="p-4 md:p-6">
            <FaClock className="text-3xl md:text-5xl text-bg-blue mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Заезд и выезд</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Заезд — после 14:00. Выезд — до 12:00. Возможность раннего заезда
              и позднего выезда обсуждается индивидуально.
            </p>
          </div>
          <div className="p-4 md:p-6">
            <FaChild className="text-3xl md:text-5xl text-bg-blue mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Проживание с детьми</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Дети до 5 лет проживают бесплатно без предоставления
              дополнительного места. По запросу предоставляются детские кроватки.
            </p>
          </div>
          <div className="p-4 md:p-6">
            <FaPaw className="text-3xl md:text-5xl text-bg-blue mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Проживание с животными</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Мы любим животных, но проживание с домашними питомцами в отеле не
              предусмотрено.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-theme-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-12">
            Подробные условия
          </h2>
          <div className="space-y-4 md:space-y-8">
            {rulesData.map((rule) => (
              <div
                key={rule.title}
                className="flex items-start gap-x-4 md:gap-x-6 p-4 md:p-6 border rounded-lg"
              >
                <div className="text-2xl md:text-3xl text-bg-blue mt-1 flex-shrink-0">{rule.icon}</div>
                <div>
                  <h3 className="text-base md:text-xl font-bold mb-1">{rule.title}</h3>
                  <p className="leading-relaxed text-sm md:text-base">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Остались вопросы?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Наша служба поддержки всегда готова помочь вам.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-x-8">
            <div className="text-base md:text-xl">
              Телефон:{" "}
              <a
                href="https://youtu.be/s6z-Gc65xOc"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-theme-blue"
              >
                8 (800) 555-35-35
              </a>
            </div>
            <Link
              to="/faq"
              className="px-6 md:px-8 py-3 md:py-4 bg-bg-blue text-white uppercase rounded-lg font-bold text-sm md:text-base"
            >
              Частые вопросы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RulesPage;
