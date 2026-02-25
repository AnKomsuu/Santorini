import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-theme-100 px-4 md:px-11 pt-6 md:pt-10 pb-5 md:pb-8.5 rounded-t-[60px] md:rounded-t-[100px] shadow-md">
      <img
        src={room.image}
        alt={room.category}
        className="w-full h-48 sm:h-64 md:h-80 lg:h-100 object-cover rounded-t-[60px] md:rounded-t-[100px]"
      />
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row justify-between text-sm md:text-lg sm:items-center text-theme-blue mt-3 md:mt-5 mb-5 md:mb-10 gap-2">
          <h3 className="uppercase font-medium">{room.category}</h3>
          <div className="flex items-center gap-x-2 md:gap-x-3 flex-wrap text-xs md:text-base">
            <div className="w-px h-4 bg-bg-blue hidden sm:block"></div>
            <span>{room.area}</span>
            <div className="w-px h-4 bg-bg-blue"></div>
            <span className="flex items-center gap-x-1">
              <GoPeople /> {room.capacity}
            </span>
            <div className="w-px h-4 bg-bg-blue"></div>
            <span>{room.view}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          <Link
            to={`/rooms/${room.id}`}
            state={{ scrollToBooking: true }}
            className="py-3 md:py-5 px-5 md:px-10 uppercase hover:bg-orange-500 bg-bg-blue text-white cursor-pointer rounded-xs text-center text-sm md:text-base"
          >
            ЗАБРОНИРОВАТЬ
          </Link>
          <Link
            to={`/rooms/${room.id}`}
            className="py-3 md:py-5 px-5 md:px-10 border border-bg-blue rounded-xs text-bg-blue font-medium hover:bg-bg-blue hover:text-white text-center text-sm md:text-base"
          >
            ПОДРОБНЕЕ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
