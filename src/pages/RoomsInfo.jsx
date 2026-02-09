import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AboutRoom from "./AboutRoom/AboutRoom";
import RoomVideo from "./RoomVideo/RoomVideo";
import RoomGallery from "./RoomGallery/RoomGallery";
import SectionBookingForm from "../../components/SectionBookingForm/SectionBookingForm";

const RoomsInfo = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { roomId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (room && location.state?.scrollToBooking) {
      const bookingSection = document.getElementById("booking-form");

      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [room, location]);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/db.json");
        const allRooms = response.data.rooms;

        const currentRoom = allRooms.find((r) => r.id === Number(roomId));

        if (currentRoom) {
          setRoom(currentRoom);
        } else {
          setError("Извините, комната с таким ID не найдена.");
        }
      } catch (err) {
        setError("Произошла ошибка при загрузке данных.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  if (loading) {
    return (
      <div className="container py-40 text-center text-2xl">
        Загрузка информации о номере...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-40 text-center text-2xl text-red-500">
        {error}
        <div className="mt-8">
          <Link
            to="/rooms"
            className="px-6 py-3 bg-bg-blue text-white rounded-lg"
          >
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section>
      {room && (
        <>
          <AboutRoom room={room} />
          {room.videoUrl && <RoomVideo videoUrl={room.videoUrl} />}
          {room.gallery && <RoomGallery gallery={room.gallery} />}
        </>
      )}
      <div id="booking-form">
        <SectionBookingForm
          variant="full"
          itemName={`Номер "${room.category}"`}
        />
      </div>
    </section>
  );
};

export default RoomsInfo;
