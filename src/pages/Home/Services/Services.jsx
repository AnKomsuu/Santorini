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
    <>
      <div className="pb-30">
        <h2 className="uppercase text-center text-5xl my-17.5">
          вам понравится у нас
        </h2>
        <div className="flex justify-center items-end gap-8">
          <div>
            <div className="uppercase">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className="border-b-2 border-bg-blue pt-5 pb-2 cursor-pointer transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-5 mr-25">
                      <span
                        className={`text-2xl transition-colors ${
                          activeIndex === index
                            ? "text-theme-blue ml-2"
                            : "text-gray-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`text-3xl transition-all duration-300 ${
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
                      className="text-sm text-theme-blue mr-4"
                    >
                      подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-8 mt-28 text-theme-blue">
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

          <div>
            <img
              src={servicesData[activeIndex].image}
              alt={servicesData[activeIndex].title}
              className="rounded-tl-[100px] w-140 h-150"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
