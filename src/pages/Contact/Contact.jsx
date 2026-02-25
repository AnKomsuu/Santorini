import fon from "../../assets/contactFon.png";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import SectionBookingForm from "../../components/SectionBookingForm/SectionBookingForm";
import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="container">
      <Helmet>
        <title>Контакты — Santorini Hotel</title>
        <meta name="description" content="Свяжитесь с отелем Santorini — адрес, телефон, email и форма обратной связи." />
      </Helmet>
      <div className="relative">
        <img className="rounded-b-2xl w-full" src={fon} alt="Карта расположения отеля" />
        <FaLocationDot className="text-red-500 top-[30%] right-[44%] absolute text-2xl md:text-4xl" />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="px-4 md:pl-20 md:pr-30 pt-8 md:pt-11">
          <h3 className="uppercase text-2xl md:text-4xl">свяжитесь с нами</h3>
          <p className="flex items-center gap-x-3 md:gap-x-4 mt-6 md:mt-12 text-sm md:text-base">
            <FaLocationDot className="text-xl md:text-2xl flex-shrink-0" />
            298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1
          </p>
          <p className="flex items-center gap-x-3 md:gap-x-4 my-4 md:my-6 text-sm md:text-base">
            <FiPhone className="text-xl md:text-2xl flex-shrink-0" />
            +7 (912) 038-80-44
          </p>
          <p className="flex items-center gap-x-3 md:gap-x-4 text-sm md:text-base">
            <FiMail className="text-xl md:text-2xl flex-shrink-0" />
            santorinihotel@mail.ru
          </p>
        </div>
        <div className="w-full md:w-auto">
          <SectionBookingForm
            variant="simple"
            showComment={true}
            title=" "
            buttonText="Отправить сообщение"
            itemName="Обращение со страницы Контакты"
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
