import { useState, useEffect } from "react";
import axios from "axios";
import decore from "../../../assets/roomsDecore.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Offers = () => {
  const [specials, setSpecials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const response = await axios.get("/db.json");
        if (response.data && response.data.news) {
          const allSpecials = response.data.news;
          const selectedSpecials = allSpecials.filter(
            (special) => special.id >= 3 && special.id <= 5
          );

          setSpecials(selectedSpecials);
        } else {
          console.error("Раздел 'specials' не найден в db.json");
        }
      } catch (err) {
        console.error("Ошибка загрузки предложений:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecials();
  }, []);

  if (loading) {
    return <div className="container py-20 text-center">Загрузка...</div>;
  }
  return (
    <section className="container py-10 md:py-20">
      <div className="relative flex justify-center items-center mb-10 md:mb-22 mt-10 md:mt-28 h-auto md:h-55">
        <img
          className="absolute w-full md:w-200 -z-10"
          src={decore}
          alt=""
        />
        <h2 className="text-3xl md:text-5xl uppercase text-center leading-tight md:leading-17">
          наши <br /> спецпредложения
        </h2>
      </div>
      {specials.map((item) => (
        <div key={item.id}>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-y-6 lg:gap-x-12">
            <img
              className="w-full lg:w-160 h-auto lg:h-80 object-cover rounded-lg"
              src={item.image}
              alt=""
            />
            <div className="w-full lg:w-125">
              <p className="text-base md:text-lg">12/06.22</p>
              <p className="uppercase text-xl md:text-2xl mt-4 md:mt-7.5 mb-3 md:mb-5">
                {item.title}
              </p>
              <p
                className={`text-base md:text-lg mb-6 md:mb-16 ${
                  item.id === 1 ? "md:mb-24" : ""
                }`}
              >
                {item.excerpt}
              </p>
              <Link
                to={`/news/${item.id}`}
                className="flex items-center gap-x-3 text-bg-blue hover:text-orange-500 uppercase text-base md:text-lg font-medium"
              >
                Подробнее <BsArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="border-b border-bg-blue w-full my-8 md:my-10"></div>
        </div>
      ))}
      <div className="text-center mt-10 md:mt-15">
        <Link
          to="/specials"
          className="text-lg md:text-xl underline text-bg-blue hover:text-orange-500"
        >
          Смотреть все
        </Link>
      </div>
    </section>
  );
};
export default Offers;
