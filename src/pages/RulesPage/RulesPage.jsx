import { Link } from "react-router-dom";
import fon from "../../assets/rulesPageFon.jpg";
import Button from "../../components/UI/Button";
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
    text: "Просим вас соблюдать тишину и уважать право на отдых других гостей, особенно в период с 23:00 до 08:00. Курение, в том числе электронных сигарет, в номерах, на балконах и в общественных зонах отеля строго запрещено. Для курения оборудованы специальные места.",
  },
  {
    icon: <FaRegLifeRing />,
    title: "Безопасность и ответственность",
    text: "Администрация отеля не несет ответственности за ценные вещи, деньги и документы, оставленные вне сейфа, находящегося в номере. Просим соблюдать правила пожарной безопасности и правила пользования электроприборами.",
  },
];

const RulesPage = () => {
  return (
    <>
      <section className="relative w-full h-[400px]">
        <img className="w-full h-full object-cover" src={fon} alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif">Правила проживания</h2>
          <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto">
            Для вашего комфорта и безопасности, просим ознакомиться с нашими
            правилами.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <FaClock className="text-3xl md:text-4xl lg:text-5xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Заезд и выезд</h3>
            <p className="text-gray-600">
              Заезд — после 14:00. Выезд — до 12:00. Возможность раннего заезда
              и позднего выезда обсуждается индивидуально с администратором.
            </p>
          </div>
          <div className="p-6">
            <FaChild className="text-3xl md:text-4xl lg:text-5xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Проживание с детьми</h3>
            <p className="text-gray-600">
              Дети до 5 лет проживают бесплатно без предоставления
              дополнительного места. По запросу бесплатно предоставляются
              детские кроватки.
            </p>
          </div>
          <div className="p-6">
            <FaPaw className="text-3xl md:text-4xl lg:text-5xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Проживание с животными</h3>
            <p className="text-gray-600">
              Мы любим животных, но для обеспечения комфорта и безопасности всех
              гостей, проживание с домашними питомцами в отеле не предусмотрено.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-theme-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-12">
            Подробные условия
          </h2>
          <div className="space-y-8">
            {rulesData.map((rule) => (
              <div
                key={rule.title}
                className="flex items-start gap-x-6 p-6 border rounded-lg"
              >
                <div className="text-3xl text-bg-blue mt-1">{rule.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{rule.title}</h3>
                  <p className="leading-relaxed">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="container text-center">
          <h2 className="text-3xl font-serif mb-4">Остались вопросы?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Наша служба поддержки всегда готова помочь вам.
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <div className="text-xl">
              Телефон:{" "}
              <a
                href="https://youtu.be/s6z-Gc65xOc"
                target="https://youtu.be/s6z-Gc65xOc"
                className="font-bold text-theme-blue"
              >
                8 (800) 555-35-35
              </a>
            </div>
            <Button to="/faq" variant="primary" className="px-8 py-4">
              Частые вопросы
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RulesPage;
