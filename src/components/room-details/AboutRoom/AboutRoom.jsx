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
    <section className="container py-10">
      <div className="relative w-full h-[60vh] md:h-screen flex items-end justify-center mb-10 md:mb-28">
        <img
          className="absolute w-full h-full rounded-b-2xl object-cover"
          src={room.image}
          alt=""
        />
        <p
          className="absolute text-2xl md:text-5xl uppercase text-center
                          py-4 md:pt-9 px-8 md:px-25 bg-theme-img rounded-t-[30px] md:rounded-t-[50px] font-serif"
        >
          номер {room.category}
        </p>
      </div>
      <div className="space-y-7">
        {roomInfoSections.map((section) => (
          <div
            key={section.id}
            className={`grid grid-cols-1 md:grid-cols-12 items-start gap-4 md:gap-8 ${
              section.id !== 5 ? "border-b pb-8 border-theme-blue" : ""
            }`}
          >
            <div className="md:col-span-5">
              <h2 className="text-xl md:text-[26px] uppercase tracking-[1px] text-theme-blue font-medium">
                {section.title}
              </h2>
            </div>

            <div className="md:col-span-1 row-auto flex justify-start md:justify-center my-2 md:my-0">
              <div className="text-2xl md:text-3xl text-theme-blue bg-theme-100 p-3 rounded-full">
                {section.logo}
              </div>
            </div>

            <div className="md:col-span-6">
              <p className="text-base md:text-lg leading-relaxed w-full">
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
