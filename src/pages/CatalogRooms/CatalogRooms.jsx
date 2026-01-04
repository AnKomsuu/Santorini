import { useState } from "react";
import fon from "../../assets/roomsFon.jpg";
import HeroBookingForm from "../../components/HeroBookingForm/HeroBookingForm";
import decore from "../../assets/roomsDecore.svg";
import RoomCard from "../../components/RoomCard/RoomCard";
import decore2 from "../../assets/decoreMini2.svg";
import useData from "../../hooks/useData";
import api from "../../services/api";

const ITEMS_PER_PAGE = 8;

const CatalogRooms = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const { data: rooms, loading, error } = useData(api.getRooms);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container py-10">
      <img className="rounded-b-2xl w-full" src={fon} alt="" />
      <div className="relative mt-[-6rem] md:mt-15 z-10">
        <HeroBookingForm />
      </div>
      <div className="relative flex justify-center items-center flex-col my-10 md:my-12 h-auto md:h-55">
        <img
          className="absolute w-1/2 md:w-auto -z-10"
          src={decore}
          alt=""
        />
        <h2 className="text-3xl md:text-5xl uppercase mb-4 md:mb-6 text-center">
          Номера
        </h2>
        <p className="font-medium text-xl md:text-3xl text-center">
          Выбери свой номер
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-35 gap-y-10 md:gap-y-20">
        {rooms?.slice(0, visibleCount).map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      <div className="col-span-1 md:col-span-2 text-center my-8">
        <img src={decore2} alt="decoration" className="mx-auto hidden md:block" />
      </div>
      <div className="text-center mt-10 md:mt-16">
        {visibleCount >= (rooms?.length || 0) ? (
          <button
            onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
            className="px-8 md:px-10 cursor-pointer py-3 md:py-4 uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
          >
            Свернуть
          </button>
        ) : (
          <button
            onClick={() =>
              setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE)
            }
            className="px-8 md:px-10 py-3 md:py-4 cursor-pointer uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
          >
            Смотреть еще
          </button>
        )}
      </div>
    </div>
  );
};
export default CatalogRooms;
