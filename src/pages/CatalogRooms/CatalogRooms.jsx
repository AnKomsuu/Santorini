import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import fon from "../../assets/roomsFon.jpg";
import HeroBookingForm from "../../components/HeroBookingForm/HeroBookingForm";
import decore from "../../assets/roomsDecore.svg";
import RoomCard from "../../components/RoomCard/RoomCard";
import decore2 from "../../assets/decoreMini2.svg";

const ITEMS_PER_PAGE = 8;

const CatalogRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("/db.json");
        setRooms(response.data.rooms);
      } catch {
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <Helmet>
        <title>Каталог номеров — Santorini Hotel</title>
        <meta name="description" content="Выберите номер в отеле Santorini — от стандартных до люксов с видом на море." />
      </Helmet>
      <img className="rounded-b-2xl w-full" src={fon} alt="Каталог номеров" />
      <div className="relative mt-8 md:mt-15 z-10">
        <HeroBookingForm />
      </div>
      <div className="relative flex justify-center items-center flex-col mb-8 md:mb-12 h-32 md:h-55">
        <img className="absolute hidden md:block" src={decore} alt="" />
        <h2 className="text-3xl md:text-5xl uppercase mb-4 md:mb-6">Номера</h2>
        <p className="font-medium text-xl md:text-3xl">Выбери свой номер</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-35 md:gap-y-20">
        {rooms.slice(0, visibleCount).flatMap((room, index) => {
          const elementsToReturn = [<RoomCard key={room.id} room={room} />];

          if (
            (index + 1) % 2 === 0 &&
            index + 1 < rooms.slice(0, visibleCount).length
          ) {
            elementsToReturn.push(
              <div
                key={`decor-${room.id}`}
                className="col-span-1 md:col-span-2 hidden md:flex justify-center my-[-2rem]"
              >
                <img src={decore2} alt="decoration" />
              </div>
            );
          }

          return elementsToReturn;
        })}
      </div>
      <div className="text-center mt-10 md:mt-16">
        {visibleCount >= rooms.length ? (
          <button
            onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
            className="px-6 md:px-10 cursor-pointer py-3 md:py-4 uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors text-sm md:text-base"
          >
            Свернуть
          </button>
        ) : (
          <button
            onClick={() =>
              setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE)
            }
            className="px-6 md:px-10 py-3 md:py-4 cursor-pointer uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors text-sm md:text-base"
          >
            Смотреть еще
          </button>
        )}
      </div>
    </div>
  );
};
export default CatalogRooms;
