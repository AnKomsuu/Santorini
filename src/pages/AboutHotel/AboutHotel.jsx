import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHeart, FaLeaf, FaUtensils, FaUsers } from "react-icons/fa";

import fon from "../../assets/aboutFon.jpg";
import beach from "../../assets/beach.jpg";
import cooker from "../../assets/cooker.jpg";
import manager from "../../assets/manager.jpg";

const valuesData = [
  {
    icon: <FaHeart />,
    title: "Персональный подход",
    text: "Мы помним, какой кофе вы любите, и готовим номер к вашему приезду, учитывая все пожелания.",
  },
  {
    icon: <FaLeaf />,
    title: "Единение с природой",
    text: "Наш отель окружен реликтовым парком, а в отделке мы используем только натуральные и экологичные материалы.",
  },
  {
    icon: <FaUtensils />,
    title: "Вкус настоящей кухни",
    text: "Все блюда готовятся из свежайших локальных продуктов от проверенных фермеров и рыбаков.",
  },
  {
    icon: <FaUsers />,
    title: "Идеально для семьи",
    text: "Продуманная инфраструктура для детей и взрослых позволяет каждому найти занятие по душе.",
  },
];

const teamData = [
  {
    image: cooker,
    name: "Арсений Чуганин",
    role: "Шеф-повар",
    quote:
      "Моя цель — чтобы вы вспоминали вкус нашего борща так же тепло, как шум моря.",
  },
  {
    image: manager,
    name: "Элеонора Андреевна",
    role: "Управляющая СПА",
    quote:
      "Я верю, что настоящий отдых начинается тогда, когда тело и разум находятся в гармонии.",
  },
];

const AboutHotel = () => {
  return (
    <>
      <Helmet>
        <title>Об отеле — Santorini Hotel</title>
        <meta name="description" content="Узнайте о философии гостеприимства отеля Santorini — семейные ценности, натуральные материалы и безупречный сервис." />
      </Helmet>
      <section className="relative w-full max-w-[1512px] mx-auto h-48 sm:h-72 md:h-[500px] flex items-center justify-center text-center">
        <img
          src={fon}
          alt="Территория отеля Santorini"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative text-white px-4">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif">Наша философия гостеприимства</h2>
          <p className="mt-3 md:mt-5 text-sm md:text-xl max-w-2xl mx-auto">
            Узнайте, почему Santorini — это больше, чем просто отель на берегу
            моря.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-bg-blue">
              Место, где встречаются море и душа
            </h2>
            <p className="mt-4 md:mt-8 mb-3">
              Santorini родился из семейной мечты — создать на крымском
              побережье не просто отель, а настоящий дом вдали от дома.
            </p>
            <p>
              Наша миссия — дарить вам не просто проживание, а бесценные
              воспоминания.
            </p>
          </div>
          <div>
            <img
              src={beach}
              alt="Уголок отеля"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background-secondary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-2">
            Что делает ваш отдых особенным
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12">
            Наши четыре столпа гостеприимства
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="p-4 md:p-6">
                <div className="text-3xl md:text-5xl text-bg-blue inline-block mb-3 md:mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-bg-blue text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-8 md:mb-15">Santorini в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-3xl md:text-5xl font-bold">5 Га</p>
              <p className="mt-2 opacity-80 text-sm md:text-base">ухоженной парковой территории</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold">30 м</p>
              <p className="mt-2 opacity-80 text-sm md:text-base">до собственного галечного пляжа</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold">2</p>
              <p className="mt-2 opacity-80 text-sm md:text-base">бассейна с морской и пресной водой</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold">10+</p>
              <p className="mt-2 opacity-80 text-sm md:text-base">лет опыта в создании безупречного отдыха</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-8 md:mb-12">
            Люди, которые создают уют
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
                />
                <p className="text-lg md:text-xl font-bold">{member.name}</p>
                <p className="text-bg-blue mb-3">{member.role}</p>
                <p className="text-gray-600 italic text-sm md:text-base">&quot;{member.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-theme-50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-10">
            Готовы стать частью нашей истории?
          </h2>
          <Link
            to="/rooms"
            className="px-8 md:px-10 py-3 md:py-4 bg-bg-blue text-white uppercase rounded-lg font-bold text-sm md:text-base"
          >
            Выбрать номер
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutHotel;
