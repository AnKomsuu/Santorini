import decore from "../../../assets/decoreGallery.svg";

const RoomGallery = ({ gallery }) => {
  return (
    <>
      <div className="container py-28">
        <h2 className="text-5xl uppercase text-center mb-23">галерея</h2>
        <div className="grid grid-cols-8 gap-x-20 relative mb-10">
          <img
            className="col-span-3 rounded-t-[80px]"
            src={gallery[0]}
            alt=""
          />
          <img
            className="col-span-2 rounded-t-[80px]"
            src={gallery[1]}
            alt=""
          />
          <img
            className="col-span-3 rounded-t-[80px]"
            src={gallery[2]}
            alt=""
          />
          <img
            className="bottom-[-15%] left-[47%] absolute"
            src={decore}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default RoomGallery;
