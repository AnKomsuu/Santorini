import decore from "../../../assets/decoreGallery.svg";

const RoomGallery = ({ gallery }) => {
  return (
    <div className="container py-10 md:py-28">
      <h2 className="text-3xl md:text-5xl uppercase text-center mb-10 md:mb-23">
        галерея
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-x-10 lg:gap-x-20 relative mb-10">
        <img
          className="md:col-span-3 rounded-t-[40px] md:rounded-t-[80px] w-full"
          src={gallery[0]}
          alt=""
        />
        <img
          className="md:col-span-2 rounded-t-[40px] md:rounded-t-[80px] w-full"
          src={gallery[1]}
          alt=""
        />
        <img
          className="md:col-span-3 rounded-t-[40px] md:rounded-t-[80px] w-full"
          src={gallery[2]}
          alt=""
        />
        <img
          className="bottom-[-15%] left-1/2 -translate-x-1/2 absolute hidden md:block"
          src={decore}
          alt=""
        />
      </div>
    </div>
  );
};
export default RoomGallery;
