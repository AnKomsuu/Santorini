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
    <>
      <section className="container">
        <div className="relative flex justify-center items-center mb-22 mt-28 h-55">
          <img className="absolute w-200" src={decore} alt="" />
          <h2 className="text-5xl uppercase text-center leading-17">
            наши <br /> спецпредложения
          </h2>
        </div>
        {specials.map((item) => (
          <div key={item.id}>
            <div className="flex justify-center gap-x-12">
              <img
                className="w-160 h-80 object-cover"
                src={item.image}
                alt=""
              />
              <div className="w-125">
                <p className="text-lg">12/06.22</p>
                <p className="uppercase text-2xl mt-7.5 mb-5">{item.title}</p>
                <p className={`text-lg ${item.id === 1 ? "mb-24" : "mb-16"}`}>
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-x-3 text-bg-blue hover:text-orange-500 uppercase text-lg font-medium"
                >
                  Подробнее <BsArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="border-1 border-bg-blue w-full my-10"></div>
          </div>
        ))}
        <div className="text-center mt-15">
          <Link
            to="/specials"
            className="text-xl underline text-bg-blue hover:text-orange-500"
          >
            Смотреть все
          </Link>
        </div>
      </section>
    </>
  );
};
export default Offers;
