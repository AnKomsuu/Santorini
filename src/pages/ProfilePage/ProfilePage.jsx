import { useState, useEffect } from "react";
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
    <section className="container pt-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-8">Личный кабинет</h1>
      <div className="bg-theme-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Добро пожаловать, {user.name}!
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Телефон:</strong> {user.phone}
        </p>

        <button
          onClick={logout}
          className="mt-8 cursor-pointer bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
        >
          Выйти из аккаунта
        </button>
      </div>
      <div className="col-span-2">
        <h2 className="text-2xl font-bold mt-7 mb-10">
          Ваши заявки и бронирования:
        </h2>
        {myBookings.length > 0 ? (
          <div>
            {myBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-theme-100 p-5 rounded-lg shadow-sm border mb-5"
              >
                <p className="font-bold text-lg mb-2">{booking.itemName}</p>
                {booking.comment && (
                  <p className="text-sm mt-2 italic p-2">"{booking.comment}"</p>
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
          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <p>У вас пока нет активных заявок или бронирований.</p>
            <p className="mt-2 text-sm">Самое время это исправить!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
