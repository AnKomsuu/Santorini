import fon from "../../assets/roadFon.jpg";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { FiUser, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Road = () => {
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const { isAuth, user } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");

  useEffect(() => {
    if (isAuth && user) {
      setName(user.name || "");
      setPhone(user.phone || "");
    }
  }, [isAuth, user]);

  const navigate = useNavigate();

  const isNameValid = name.trim().length >= 2;

  const isPhoneValid = phone.replace(/[^0-9]/g, "").length === 12;

  const isFormValid = isNameValid && isPhoneValid;

  const handleNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[а-яА-ЯЁёa-zA-Z -]*$/;
    if (regex.test(value)) {
      setName(value);
      if (value.trim().length > 0 && value.trim().length < 2) {
        setNameError("Минимум 2 буквы");
      } else {
        setNameError("");
      }
    } else {
      setNameError("Только буквы");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      toast.error("Пожалуйста, заполните все поля корректно.");
      return;
    }

    const phoneRegex =
      /^\+996(?:22[0-9]|50[0-9]|55[0-9]|70[0-9]|755|77[0-9]|99[0-9])\d{6}$/;
    const cleanPhone = phone.replace(/[\s()-]/g, "");

    if (!phoneRegex.test(cleanPhone)) {
      setPhoneError("Неверный код оператора.");
      return;
    }
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const hasAlreadyRequested = allBookings.some(
        (booking) =>
          booking.userId === user.id && booking.itemName === "Запрос помощи"
      );

      if (hasAlreadyRequested) {
        toast.error(
          "Вы уже отправляли запрос о помощи. Наш менеджер скоро с вами свяжется."
        );
        return;
      }
    }

    const helpRequest = {
      id: Date.now(),
      userId: user?.id,
      status: "Обрабатывается",
      itemName: "Запрос помощи",
      userName: name,
      userPhone: phone,
    };

    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = [...allBookings, helpRequest];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    setName("");
    setPhone("");
    toast.success("Спасибо! Мы скоро с вами свяжемся.");
    navigate("/");
  };
  return (
    <>
      <section className="container">
        <div className="relative mb-47">
          <img src={fon} alt="" />
          <p
            className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 text-center text-2xl md:text-3xl lg:text-4xl uppercase
                          pt-9 px-15 bg-theme-img rounded-t-[40px] font-serif leading-snug"
          >
            Постройте свой маршрут <br /> до нашего отеля
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24117.507622667265!2d72.95076370239256!3d40.922576442754895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bd1764c4e5d8e3%3A0xe150466ed53b6b51!2zIkdvb2QgTmlnaHQiINC-0YLQtdC70Yw!5e0!3m2!1sru!2skg!4v1755437908476!5m2!1sru!2skg"
            className="w-full h-96 mb-20"
            style={{ border: 0 }}
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-2xl text-center mb-10">
          Заблудились? Поможем добраться!
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col md:flex-row items-start gap-4 md:gap-x-4 mx-auto px-4"
        >
          <div className="flex-grow">
            <div className="flex items-center">
              <FiUser className="absolute text-xl text-theme-blue ml-3" />
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                disabled={isAuth}
                placeholder="Ваше имя"
                className="w-full h-14 pl-12 pr-4 border-2 border-theme-blue rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
          </div>

          <div className="flex-grow">
            <div className="flex items-center">
              <FiPhone className="absolute text-xl text-theme-blue ml-3" />
              <InputMask
                mask="+\9\96 (999) 999-999"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError("");
                }}
                disabled={isAuth}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    placeholder="Ваш номер телефона"
                    className="w-full h-14 pl-12 pr-4 border-2 border-theme-blue rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                )}
              </InputMask>
            </div>
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="h-14 px-8 cursor-pointer bg-bg-blue text-white font-bold rounded-md
                   disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            НУЖНА ПОМОЩЬ
          </button>
        </form>
      </section>
    </>
  );
};
export default Road;
