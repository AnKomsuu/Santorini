import { Helmet } from "react-helmet-async";
import decore from "../../assets/errorDecore.png";

const galleryData = [
  {
    id: 1,
    src: "/image/gallery/photo1.jpg",
    title: "Вид из номера",
    colSpan: "col-span-2 md:col-span-3",
    rowSpan: "md:row-span-2",
    height: "h-48 md:h-165",
  },
  {
    id: 2,
    src: "/image/gallery/photo2.jpg",
    title: "Лобби",
    colSpan: "col-span-1",
    height: "h-36 md:h-80",
  },
  {
    id: 3,
    src: "/image/gallery/photo3.jpg",
    title: "Деталь интерьера",
    colSpan: "col-span-1",
    height: "h-36 md:h-80",
  },
  {
    id: 4,
    src: "/image/gallery/photo4.jpg",
    title: "Ресторан",
    colSpan: "col-span-2",
    height: "h-36 md:h-80",
  },
  {
    id: 5,
    src: "/image/gallery/photo5.jpg",
    title: "Бассейн и море",
    colSpan: "col-span-1",
    height: "h-36 md:h-80",
  },
  {
    id: 6,
    src: "/image/gallery/photo6.jpg",
    title: "Вечерняя терраса",
    colSpan: "col-span-1",
    height: "h-36 md:h-80",
  },
  {
    id: 7,
    src: "/image/gallery/photo7.jpg",
    title: "Бассейн на закате",
    colSpan: "col-span-2 md:col-span-3",
    rowSpan: "md:row-span-2",
    height: "h-48 md:h-165",
  },
  {
    id: 8,
    src: "/image/gallery/photo8.jpg",
    title: "Интерьер номера 'Люкс'",
    colSpan: "col-span-2",
    height: "h-36 md:h-80",
  },
  {
    id: 9,
    src: "/image/gallery/photo9.jpg",
    title: "Зона СПА",
    colSpan: "col-span-2 md:col-span-3",
    height: "h-40 md:h-120",
  },
  {
    id: 10,
    src: "/image/gallery/photo10.jpg",
    title: "Завтрак на террасе",
    colSpan: "col-span-2",
    height: "h-40 md:h-120",
  },
];
const PhotoCard = ({ src, title, colSpan, rowSpan, height }) => {
  return (
    <div
      className={`relative rounded-xl md:rounded-2xl overflow-hidden ${colSpan} ${rowSpan}`}
    >
      <img src={src} alt={title} className={`object-cover w-full ${height}`} />
      <p
        className={`absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white font-bold text-sm md:text-xl ${
          height?.includes("h-80") ? "md:text-xl" : "md:text-3xl"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
const PhotoHotel = () => {
  return (
    <section className="container">
      <Helmet>
        <title>Фотогалерея — Santorini Hotel</title>
        <meta name="description" content="Фотогалерея отеля Santorini — виды номеров, территории, бассейна и ресторана." />
      </Helmet>
      <div className="relative py-10 md:py-20 mx-auto max-w-[680px] my-10 md:my-20 text-center">
        <img className="absolute bottom-0 hidden md:block" src={decore} alt="" />
        <h2 className="text-2xl md:text-4xl uppercase">Виды нашего отеля</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
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
  );
};
export default PhotoHotel;
