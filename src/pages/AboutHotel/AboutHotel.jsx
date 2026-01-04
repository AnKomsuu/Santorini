import { FaHeart, FaLeaf, FaUtensils, FaUsers } from "react-icons/fa";
import Button from "../../components/UI/Button";

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
      <section className="relative w-full h-[500px]">
        <img
          src={fon}
          alt="Территория отеля Santorini"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif">Наша философия гостеприимства</h2>
          <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto">
            Узнайте, почему Santorini — это больше, чем просто отель на берегу
            моря.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-bg-blue">
              Место, где встречаются море и душа
            </h2>
            <p className="mt-8 mb-3">
              Santorini родился из семейной мечты — создать на крымском
              побережье не просто отель, а настоящий дом вдали от дома. Место,
              где каждый гость чувствует себя не клиентом, а долгожданным
              другом.
            </p>
            <p>
              Наша миссия — дарить вам не просто проживание, а бесценные
              воспоминания. Мы вложили душу в каждый уголок нашей территории,
              чтобы вы могли найти здесь свое место силы, спокойствия и
              вдохновения.
            </p>
          </div>
          <div>
            <img
              src={beach}
              alt="Уголок отеля"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-secondary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-2">
            Что делает ваш отдых особенным
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Наши четыре столпа гостеприимства
          </p>
          <div className="grid grid-cols-4 gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl md:text-4xl lg:text-5xl text-bg-blue inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-blue text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-12 md:mb-15">Santorini в цифрах</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">5 Га</p>
              <p className="mt-2 opacity-80">ухоженной парковой территории</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">30 м</p>
              <p className="mt-2 opacity-80">до собственного галечного пляжа</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">2</p>
              <p className="mt-2 opacity-80">
                бассейна с морской и пресной водой
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">10+</p>
              <p className="mt-2 opacity-80">
                лет опыта в создании безупречного отдыха
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-12">
            Люди, которые создают уют
          </h2>
          <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <p className="text-xl font-bold">{member.name}</p>
                <p className="text-bg-blue mb-3">{member.role}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-theme-50">
        <div className="container text-center">
          <h2 className="text-3xl font-serif mb-10">
            Готовы стать частью нашей истории?
          </h2>
          <Button to="/rooms" variant="primary" className="px-10 py-4">
            Выбрать номер
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutHotel;
