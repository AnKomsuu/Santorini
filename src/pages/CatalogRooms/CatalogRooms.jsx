import { useState, useEffect } from "react";
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
      } catch (err) {
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
    <>
      <div className="container">
        <img className="rounded-b-2xl" src={fon} alt="" />
        <div className="relative mt-15 z-10">
          <HeroBookingForm />
        </div>
        <div className="relative flex justify-center items-center flex-col mb-12 h-55">
          <img className="absolute" src={decore} alt="" />
          <h2 className="text-5xl uppercase mb-6">Номера</h2>
          <p className="font-medium text-3xl">Выбери свой номер</p>
        </div>
        <div className="grid grid-cols-2 gap-x-35 gap-y-20">
          {rooms.slice(0, visibleCount).flatMap((room, index) => {
            const elementsToReturn = [<RoomCard key={room.id} room={room} />];

            if (
              (index + 1) % 2 === 0 &&
              index + 1 < rooms.slice(0, visibleCount).length
            ) {
              elementsToReturn.push(
                <div
                  key={`decor-${room.id}`}
                  className="col-span-2 flex justify-center my-[-2rem]"
                >
                  <img src={decore2} alt="decoration" />
                </div>
              );
            }

            return elementsToReturn;
          })}
        </div>
        <div className="text-center mt-16">
          {visibleCount >= rooms.length ? (
            <button
              onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
              className="px-10 cursor-pointer py-4 uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
            >
              Свернуть
            </button>
          ) : (
            <button
              onClick={() =>
                setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE)
              }
              className="px-10 py-4 cursor-pointer uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
            >
              Смотреть еще
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default CatalogRooms;
