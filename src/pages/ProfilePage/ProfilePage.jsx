import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [myBookings, setMyBookings] = useState([]);

  const loadBookings = () => {
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const userBookings = allBookings.filter(
        (booking) => booking.userId === user.id
      );
      setMyBookings(userBookings);
    }
  };

  useEffect(() => {
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const userBookings = allBookings.filter(
        (booking) => booking.userId === user.id
      );
      setMyBookings(userBookings);
    }
  }, [user]);

  const handleCancelBooking = (bookingId) => {
    if (window.confirm("Вы уверены, что хотите отменить эту заявку?")) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const updatedBookings = allBookings.filter(
        (booking) => booking.id !== bookingId
      );
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      loadBookings();
    }
  };

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="container pt-10 md:pt-20 px-4">
      <Helmet>
        <title>Личный кабинет — Santorini Hotel</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl font-serif mb-6 md:mb-8">Личный кабинет</h1>
      <div className="bg-theme-100 p-5 md:p-8 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Добро пожаловать, {user.name}!
        </h2>
        <p className="text-sm md:text-base">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-sm md:text-base">
          <strong>Телефон:</strong> {user.phone}
        </p>

        <button
          onClick={logout}
          className="mt-6 md:mt-8 cursor-pointer bg-red-500 text-white px-5 md:px-6 py-2 rounded-md hover:bg-red-600 text-sm md:text-base"
        >
          Выйти из аккаунта
        </button>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold mt-6 md:mt-7 mb-6 md:mb-10">
          Ваши заявки и бронирования:
        </h2>
        {myBookings.length > 0 ? (
          <div className="space-y-4 md:space-y-5">
            {myBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-theme-100 p-4 md:p-5 rounded-lg shadow-sm border"
              >
                <p className="font-bold text-base md:text-lg mb-2">{booking.itemName}</p>
                {booking.comment && (
                  <p className="text-sm mt-2 italic p-2">&quot;{booking.comment}&quot;</p>
                )}
                {booking.type === "Бронь номера" && (
                  <p className="text-sm">
                    С {booking.checkIn} по {booking.checkOut}
                  </p>
                )}
                <p className="text-sm my-2">
                  Статус:{" "}
                  <span className="font-medium text-orange-500">
                    {booking.status}
                  </span>
                </p>
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="text-sm cursor-pointer text-red-500 hover:text-red-700"
                >
                  Отменить
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-6 md:p-8 border-2 border-dashed rounded-lg">
            <p className="text-sm md:text-base">У вас пока нет активных заявок или бронирований.</p>
            <p className="mt-2 text-xs md:text-sm">Самое время это исправить!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
