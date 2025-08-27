import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import decore from "../../../assets/roomsDecore.svg";
import RoomCard from "../../../components/RoomCard/RoomCard";
import "swiper/css";
import "swiper/css/navigation";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("/db.json");
        setRooms(response.data.rooms.slice(0, 5));
      } catch (err) {
        setError("Не удалось загрузить популярные номера.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container text-center">Загрузка номеров...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-20 overflow-hidden mx-auto w-377">
      <div className="relative -z-10 flex justify-center items-center flex-col mb-12 h-55">
        <img className="absolute" src={decore} alt="" />
        <h2 className="text-5xl uppercase mb-6">Номера</h2>
        <p className="font-medium text-3xl">Выбери свой номер</p>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          centeredSlides={true}
          className="!static"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <RoomCard room={room} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom absolute top-1/2 left-[30%] -translate-y-1/2 z-10 bg-orange-500 text-white p-5 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowBackSharp className="text-4xl" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-[30%] -translate-y-1/2 z-10 bg-orange-500 text-white p-5 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowForwardSharp className="text-4xl" />
        </div>
      </div>
    </section>
  );
};
export default Rooms;
