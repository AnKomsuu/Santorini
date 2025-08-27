import {
  MdOutlineCleaningServices,
  MdBed,
  MdAccessTime,
  MdBathtub,
} from "react-icons/md";
import { GoGift } from "react-icons/go";

const AboutRoom = ({ room }) => {
  const roomInfoSections = room
    ? [
        {
          id: 1,
          title: "Описание номера",
          logo: <MdBed />,
          dataKey: "description",
        },
        {
          id: 2,
          title: "В ванной комнате",
          logo: <MdBathtub />,
          dataKey: "bathroom",
        },
        {
          id: 3,
          title: "Сервис",
          logo: <MdOutlineCleaningServices />,
          dataKey: "service",
        },
        {
          id: 4,
          title: "Услуги при заезде",
          logo: <GoGift />,
          dataKey: "amenities",
        },
        {
          id: 5,
          title: "Расчетные часы",
          logo: <MdAccessTime />,
          dataKey: "check_in_out",
        },
      ]
    : [];

  return (
    <section className="container">
      <div className="relative w-full h-screen flex items-end justify-center mb-28">
        <img
          className="absolute w-full h-full rounded-b-2xl object-cover"
          src={room.image}
          alt=""
        />
        <p
          className="absolute text-5xl uppercase
                          pt-9 px-25 bg-theme-img rounded-t-[50px] font-serif"
        >
          номер {room.category}
        </p>
      </div>
      <div className=" space-y-7">
        {roomInfoSections.map((section) => (
          <div
            key={section.id}
            className={`grid grid-cols-12 items-start gap-8  ${
              section.id !== 5 ? "border-b pb-8 border-theme-blue" : ""
            }`}
          >
            <div className="col-span-5">
              <h2 className="text-[26px] uppercase tracking-[1px] text-theme-blue font-medium">
                {section.title}
              </h2>
            </div>

            <div className="col-span-1 row-auto flex justify-center">
              <div className="text-3xl text-theme-blue bg-theme-100 p-3 rounded-full">
                {section.logo}
              </div>
            </div>

            <div className="col-span-6">
              <p className="text-lg leading-relaxed w-150">
                {room.features[section.dataKey]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutRoom;
