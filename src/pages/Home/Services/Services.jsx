import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/pub.jpg";
import img2 from "../../../assets/garden.jpg";
import img3 from "../../../assets/ServicesImg1.png";
import img4 from "../../../assets/hotelTerritory.jpg";

const servicesData = [
  { id: 1, path: "/pastaBarPage", title: "ПАСТА БАР", image: img1 },
  { id: 2, path: "/*", title: "АРОМА-САД", image: img2 },
  { id: 3, path: "/photoHotel", title: "ПЛЯЖ", image: img3 },
  { id: 4, path: "/photoHotel", title: "ТЕРРИТОРИЯ ОТЕЛЯ", image: img4 },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === servicesData.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return servicesData.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="container py-10 md:py-20">
      <h2 className="uppercase text-center text-3xl md:text-5xl my-10 md:my-17.5">
        вам понравится у нас
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-8">
        <div className="w-full lg:w-auto">
          <div className="uppercase">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="border-b-2 border-bg-blue pt-5 pb-2 cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-3 md:gap-x-5 md:mr-25">
                    <span
                      className={`text-xl md:text-2xl transition-colors ${
                        activeIndex === index
                          ? "text-theme-blue ml-0 md:ml-2"
                          : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`text-xl md:text-3xl transition-all duration-300 ${
                        activeIndex === index
                          ? "text-theme-blue"
                          : "text-gray-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <Link
                    to={service.path}
                    className="text-sm text-theme-blue ml-4 md:mr-4"
                  >
                    подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-x-8 mt-8 md:mt-28 text-theme-blue">
            <button
              onClick={handlePrev}
              className="border-2 rounded-full p-4 cursor-pointer"
            >
              <IoArrowBack />
            </button>
            <span className="text-3xl">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(servicesData.length).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              className="border-2 rounded-full p-4 cursor-pointer"
            >
              <IoArrowForward />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto mt-8 lg:mt-0">
          <img
            src={servicesData[activeIndex].image}
            alt={servicesData[activeIndex].title}
            className="rounded-tl-[50px] md:rounded-tl-[100px] w-full h-auto lg:w-140 lg:h-150 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
