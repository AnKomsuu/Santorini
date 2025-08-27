import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <>
      <div className="bg-theme-100 px-11 pt-10 pb-8.5 rounded-t-[100px] shadow-md">
        <img
          src={room.image}
          alt={room.category}
          className="w-full h-100 object-cover rounded-t-[100px]"
        />
        <div className="mt-4">
          <div className=" justify-between text-lg flex items-center text-theme-blue mt-5 mb-10">
            <h3 className="uppercase font-medium">{room.category}</h3>
            <div className="flex items-center gap-x-3">
              <div className="w-px h-4 bg-bg-blue"></div>
              <span>{room.area}</span>
              <div className="w-px h-4 bg-bg-blue"></div>
              <span className="flex items-center gap-x-1">
                <GoPeople /> {room.capacity}
              </span>
              <div className="w-px h-4 bg-bg-blue"></div>
              <span>{room.view}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to={`/rooms/${room.id}`}
              state={{ scrollToBooking: true }}
              className="py-5 px-10 uppercase hover:bg-orange-500 bg-bg-blue text-white cursor-pointer rounded-xs"
            >
              ЗАБРОНИРОВАТЬ
            </Link>
            <Link
              to={`/rooms/${room.id}`}
              className="px-10 py-5 border border-bg-blue rounded-xs text-bg-blue font-medium hover:bg-bg-blue hover:text-white"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
