import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Adventure = ({ activeCategory, setActiveCategory }) => {
  const categories = ["Морские прогулки", "Рыбалка", "Экстрим"];
  const [allActivities, setAllActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("/db.json");
        setAllActivities(response.data.activities);
      } catch (err) {
        console.error("Ошибка загрузки активностей:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  const filteredActivities = allActivities.filter(
    (item) => item.category === activeCategory
  );

  if (loading) {
    return <div className="text-center py-20">Загрузка...</div>;
  }
  return (
    <div className="bg-theme-50 py-10 md:py-25 w-full">
      <div className="container">
        <h2 className="text-3xl md:text-5xl text-center leading-tight md:leading-15 uppercase">
          Активный отдых в отеле <br className="hidden md:block" /> санторини
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-15 mt-8 md:mt-13 mb-10 md:mb-17">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 md:px-10 uppercase py-3 md:py-4 border-2 border-bg-blue cursor-pointer transition-colors duration-300 text-sm md:text-base ${
                activeCategory === item
                  ? "bg-bg-blue text-white"
                  : "text-bg-blue "
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
          {filteredActivities.map((item) => {
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg ${
                  item.col === 3
                    ? "md:col-span-2 lg:col-span-3"
                    : "md:col-span-1 lg:col-span-2"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 md:h-90 transition-transform object-cover duration-400 group-hover:scale-110"
                />
                <Link
                  to={`/recreation/${item.id}`}
                  className="absolute cursor-pointer bg-theme-50 rounded-tl-[20px] md:rounded-tl-[40px] text-base md:text-2xl pl-4 md:pl-9 pt-2 pb-0 pr-0 bottom-0 right-0 flex items-center gap-x-2 md:gap-x-7"
                >
                  <span className="whitespace-nowrap">{item.title}</span>
                  <div className="rounded-full bg-[#FF8139] p-2 md:p-4 text-white">
                    <BsArrowUpRight />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Adventure;
