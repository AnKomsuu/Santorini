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
    <section className="py-20 overflow-hidden w-full">
      <div className="container">
        <div className="relative flex justify-center items-center flex-col mb-12 text-center">
          <img
            className="absolute w-1/2 md:w-auto -z-10"
            src={decore}
            alt=""
          />
          <h2 className="text-3xl md:text-5xl uppercase mb-4 md:mb-6">
            Номера
          </h2>
          <p className="font-medium text-xl md:text-3xl">Выбери свой номер</p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
            loop={true}
            centeredSlides={true}
            className="!pb-16 md:!pb-0 !static"
          >
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <RoomCard room={room} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-custom absolute top-1/2 left-2 md:left-4 lg:left-[30%] -translate-y-1/2 z-10 bg-orange-500 text-white p-3 md:p-5 rounded-full cursor-pointer hover:bg-orange-600">
            <IoArrowBackSharp className="text-2xl md:text-4xl" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-2 md:right-4 lg:right-[30%] -translate-y-1/2 z-10 bg-orange-500 text-white p-3 md:p-5 rounded-full cursor-pointer hover:bg-orange-600">
            <IoArrowForwardSharp className="text-2xl md:text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Rooms;
