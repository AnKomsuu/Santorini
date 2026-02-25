import decore from "../../../assets/decoreGallery.svg";

const RoomGallery = ({ gallery }) => {
  return (
    <div className="container py-12 md:py-28">
      <h2 className="text-3xl md:text-5xl uppercase text-center mb-10 md:mb-23">галерея</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-8 gap-4 md:gap-x-20 relative mb-10">
        <img
          className="sm:col-span-1 md:col-span-3 rounded-t-[40px] md:rounded-t-[80px] w-full object-cover h-48 md:h-auto"
          src={gallery[0]}
          alt="Фото номера 1"
          loading="lazy"
        />
        <img
          className="sm:col-span-1 md:col-span-2 rounded-t-[40px] md:rounded-t-[80px] w-full object-cover h-48 md:h-auto"
          src={gallery[1]}
          alt="Фото номера 2"
          loading="lazy"
        />
        <img
          className="sm:col-span-1 md:col-span-3 rounded-t-[40px] md:rounded-t-[80px] w-full object-cover h-48 md:h-auto"
          src={gallery[2]}
          alt="Фото номера 3"
          loading="lazy"
        />
        <img
          className="bottom-[-15%] left-[47%] absolute hidden md:block"
          src={decore}
          alt=""
        />
      </div>
    </div>
  );
};
export default RoomGallery;
