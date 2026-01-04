import decore from "../../assets/errorDecore.png";

const galleryData = [
  {
    id: 1,
    src: "/image/gallery/photo1.jpg",
    title: "Вид из номера",
    colSpan: "col-span-3",
    rowSpan: "row-span-2",
    height: "h-165",
  },
  {
    id: 2,
    src: "/image/gallery/photo2.jpg",
    title: "Лобби",
    height: "h-80",
  },
  {
    id: 3,
    src: "/image/gallery/photo3.jpg",
    title: "Деталь интерьера",
    height: "h-80",
  },
  {
    id: 4,
    src: "/image/gallery/photo4.jpg",
    title: "Ресторан",
    colSpan: "col-span-2",
    height: "h-80",
  },
  {
    id: 5,
    src: "/image/gallery/photo5.jpg",
    title: "Бассейн и море",
    height: "h-80",
  },
  {
    id: 6,
    src: "/image/gallery/photo6.jpg",
    title: "Вечерняя терраса",
    height: "h-80",
  },
  {
    id: 7,
    src: "/image/gallery/photo7.jpg",
    title: "Бассейн на закате",
    colSpan: "col-span-3",
    rowSpan: "row-span-2",
    height: "h-165",
  },
  {
    id: 8,
    src: "/image/gallery/photo8.jpg",
    title: "Интерьер номера 'Люкс'",
    colSpan: "col-span-2",
    height: "h-80",
  },
  {
    id: 9,
    src: "/image/gallery/photo9.jpg",
    title: "Зона СПА",
    colSpan: "col-span-3",
    height: "h-120",
  },
  {
    id: 10,
    src: "/image/gallery/photo10.jpg",
    title: "Завтрак на террасе",
    colSpan: "col-span-2",
    height: "h-120",
  },
];
const PhotoCard = ({ src, title, colSpan, rowSpan, height }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${colSpan} ${rowSpan}`}
    >
      <img src={src} alt={title} className={`object-cover w-full ${height}`} />

      <p
        className={`absolute bottom-4 left-4 text-white font-bold ${
          height === "h-80" ? "text-xl" : "text-3xl"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
const PhotoHotel = () => {
  return (
    <>
      <section className="container">
        <div className="relative py-20 mx-auto w-170 my-20 text-center">
          <img className="absolute bottom-0" src={decore} alt="" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase ">Виды нашего отеля</h2>
        </div>
        <div className="grid grid-cols-5 gap-4 grid-rows-2">
          {galleryData.map((photo) => (
            <PhotoCard
              key={photo.id}
              src={photo.src}
              title={photo.title}
              colSpan={photo.colSpan}
              rowSpan={photo.rowSpan}
              height={photo.height}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default PhotoHotel;
