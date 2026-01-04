import fon from "../../assets/contactFon.png";
import { FaLocationDot } from "react-icons/fa6";
import SectionBookingForm from "../../components/SectionBookingForm/SectionBookingForm";
import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <section className="container">
        <div className="relative">
          <img className="rounded-b-2xl" src={fon} alt="" />
          <FaLocationDot className="text-red-500 top-[30%] right-[44%] absolute text-2xl md:text-3xl lg:text-4xl" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="px-4 md:pl-20 md:pr-30 pt-11">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl">свяжитесь с нами</h3>
            <p className="flex items-center gap-x-4 mt-12">
              <FaLocationDot className="text-2xl" />
              298690, Россия, Крым, г. Ялта, пгт Форос, Форосский <br /> спуск,
              1
            </p>
            <p className="flex items-center gap-x-4 my-6">
              <FiPhone className="text-2xl" />
              +7 (912) 038-80-44
            </p>
            <p className="flex items-center gap-x-4">
              <FiMail className="text-2xl" />
              santorinihotel@mail.ru
            </p>
          </div>
          <div>
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
    </>
  );
};
export default Contact;
