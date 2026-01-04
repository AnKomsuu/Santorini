import InputMask from "react-input-mask";
import { FiPhone, FiUser, FiCalendar, FiUsers } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const SectionBookingForm = ({
  variant = "full",
  title,
  buttonText = "Забронировать",
  showRoomType = false,
  showComment = false,
  itemName,
}) => {
  const [comment, setComment] = useState("");
  const { isAuth, user } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [agreed, setAgreed] = useState(false);
  const [roomType, setRoomType] = useState("standard");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [agreementError, setAgreementError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && user) {
      setName(user.name || "");
      setPhone(user.phone || "");
    } else {
      setName("");
      setPhone("");
    }
  }, [isAuth, user]);

  const handleNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[а-яА-ЯЁёa-zA-Z -]*$/;
    if (regex.test(value)) {
      setName(value);
      if (value.trim().length > 0 && value.trim().length < 2) {
        setNameError("Имя должно содержать минимум 2 буквы.");
      } else {
        setNameError("");
      }
    } else {
      setNameError("Имя может содержать только буквы.");
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    setPhoneError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setDateError("");
    setCommentError("");
    setAgreementError("");

    let isValid = true;

    if (name.trim().length < 2) {
      setNameError("Имя должно содержать минимум 2 буквы.");
      isValid = false;
    }

    const phoneRegex =
      /^\+996(?:22[0-9]|50[0-9]|55[0-9]|70[0-9]|755|77[0-9]|99[0-9])\d{6}$/;
    const cleanPhone = phone.replace(/[\s()-]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      setPhoneError("Неверный формат или код оператора.");
      isValid = false;
    }

    if (variant === "full") {
      if (!checkIn || !checkOut) {
        setDateError("Пожалуйста, выберите даты.");
        isValid = false;
      } else if (new Date(checkIn) >= new Date(checkOut)) {
        setDateError("Дата выезда должна быть позже даты заезда.");
        isValid = false;
      }
    }

    if (showComment && comment.trim().length < 10) {
      setCommentError("Сообщение должно быть не менее 10 символов.");
      isValid = false;
    }

    if (!agreed) {
      setAgreementError("Пожалуйста, подтвердите согласие с политикой конфиденциальности.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    if (user && itemName) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const hasAlreadyBooked = allBookings.some(
        (booking) => booking.userId === user.id && booking.itemName === itemName
      );
      if (hasAlreadyBooked) {
        toast.error("Вы уже подавали заявку на это предложение.");
        return;
      }
    }

    const bookingData = {
      id: Date.now(),
      userId: user?.id,
      status: "Обрабатывается",
      itemName: itemName || "Заявка",
      userName: name,
      userPhone: phone,
      ...(comment && { comment: comment }),
      ...(variant === "full" && { checkIn, checkOut, adults, children }),
    };

    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = [...allBookings, bookingData];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    toast.success("Спасибо! Ваша заявка принята.");
    navigate("/");
  };

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-5xl uppercase text-center leading-tight md:leading-17 mb-10 md:mb-15">
          {title
            ? title
            : variant === "full"
            ? "Забронируйте этот номер"
            : "Оставить заявку"}
        </h2>
        <div className="w-full max-w-3xl bg-[#FF8139] mx-auto pt-10 md:pt-17.5 px-4 md:px-9 pb-8 relative rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
            noValidate
          >
            <div className="md:col-span-2">
              <div className="bg-white flex items-center text-black gap-x-2.5 px-4">
                <FiUser className="text-xl" />
                <input
                  className="w-full h-10 outline-none"
                  required
                  placeholder="Ваше имя"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  disabled={isAuth}
                />
              </div>
              {nameError && (
                <p className="text-white text-sm mt-1 ml-2">{nameError}</p>
              )}
            </div>
            {variant === "full" && (
              <>
                <div className="col-span-1">
                  <div className="bg-white px-4 text-black flex items-center gap-x-2.5">
                    <FiCalendar />
                    <input
                      className="w-full outline-none h-10"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="bg-white px-4 flex text-black items-center gap-x-2.5">
                    <FiCalendar />
                    <input
                      className="w-full outline-none h-10"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                {dateError && (
                  <p className="md:col-span-2 text-white text-sm -mt-4 ml-2">
                    {dateError}
                  </p>
                )}
              </>
            )}
            {variant === "full" && (
              <>
                <div className="col-span-1 bg-white px-4 flex text-black items-center gap-x-2.5">
                  <FiUsers />
                  <select
                    className="w-full outline-none h-10"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    disabled={isAuth}
                  >
                    <option value="1">1 Взрослый</option>
                    <option value="2">2 Взрослых</option>
                    <option value="3">3 Взрослых</option>
                    <option value="4">4 Взрослых</option>
                    <option value="5">5 Взрослых</option>
                  </select>
                </div>
                <div className="col-span-1 bg-white px-4 flex text-black items-center gap-x-2.5">
                  <FiUsers />
                  <select
                    className="w-full outline-none h-10"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  >
                    <option value="0">0 Детей</option>
                    <option value="1">1 Ребенок</option>
                    <option value="2">2 Ребенка</option>
                    <option value="3">3 Ребенка</option>
                    <option value="4">4 Ребенка</option>
                    <option value="5">5 Ребенка</option>
                  </select>
                </div>
              </>
            )}
            <div className="md:col-span-2">
              <div className="h-10 bg-white flex items-center text-black px-4 gap-x-3">
                <FiPhone className="text-xl" />
                <InputMask
                  mask="+\9\96 (999) 999-999"
                  maskChar="_"
                  alwaysShowMask={false}
                  value={phone}
                  onChange={handlePhoneChange}
                  disabled={isAuth}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="tel"
                      required
                      placeholder="Ваш номер телефона"
                      className="w-full h-full outline-none"
                      disabled={isAuth}
                    />
                  )}
                </InputMask>
              </div>
              {phoneError && (
                <p className="text-white text-sm mt-1 ml-2">{phoneError}</p>
              )}
            </div>
            {showRoomType && (
              <>
                <div className="md:col-span-2 bg-white text-black rounded-md px-3 pb-3">
                  <label className="text-xs">Выберите тип номера</label>
                  <select
                    className="w-full outline-none"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="standard">Стандарт</option>
                    <option value="deluxe">Делюкс</option>
                    <option value="luxe">Люкс</option>
                    <option value="vip">Президентский</option>
                    <option value="family">Семейный</option>
                  </select>
                </div>
                <Link
                  to="/"
                  className="absolute right-10 top-5 text-white underline hover:text-bg-blue"
                >
                  Вернуться на главную
                </Link>
              </>
            )}
            {showComment && (
              <>
                <div className="md:col-span-2 flex gap-x-2.5 h-25 bg-white text-black rounded-md px-3 pb-3 pt-1">
                  <FaRegCommentAlt className="mt-1 mx-1" />
                  <textarea
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                      if (commentError && e.target.value.trim().length >= 10) {
                        setCommentError("");
                      }
                    }}
                    placeholder="Ваше сообщение (минимум 10 символов)"
                    required
                    className="w-full outline-none resize-none"
                  ></textarea>
                </div>
                {commentError && (
                  <p className="md:col-span-2 text-red-500 text-sm mt-1 ml-2">
                    {commentError}
                  </p>
                )}
              </>
            )}

            <div className="md:col-span-2 text-center">
              {isAuth ? (
                <button
                  type="submit"
                  className="text-white text-xl uppercase font-medium cursor-pointer bg-bg-blue w-full py-4"
                >
                  {buttonText}
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-white text-xl uppercase font-medium cursor-pointer bg-bg-blue px-10 py-4"
                >
                  Войти в аккаунт
                </Link>
              )}
            </div>
            <div className="md:col-span-2 text-white text-sm">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (agreementError && e.target.checked) {
                    setAgreementError("");
                  }
                }}
                className="cursor-pointer mr-1"
              />
              Нажимая на кнопку, вы автоматически соглашаетесь с
              <a
                className="underline ml-1"
                target="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
                href="https://secrets.tbank.ru/glossarij/chto-takoe-politika-konfidencialnosti/"
              >
                Политикой конфиденциальности
              </a>
              {agreementError && (
                <p className="text-red-500 text-sm mt-1">{agreementError}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SectionBookingForm;
