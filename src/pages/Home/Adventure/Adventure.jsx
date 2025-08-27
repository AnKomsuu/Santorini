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
    <>
      <div className="bg-theme-50 py-25 w-377 mx-auto">
        <div className="container">
          <h2 className="text-5xl text-center leading-15 uppercase">
            Активный отдых в отеле <br /> санторини
          </h2>
          <div className="flex justify-center gap-x-15 mt-13 mb-17">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`px-10 uppercase py-4 border-2 border-bg-blue cursor-pointer transition-colors duration-300 ${
                  activeCategory === item
                    ? "bg-bg-blue text-white"
                    : "text-bg-blue "
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-10">
            {filteredActivities.map((item, index) => {
              const rowIndex = Math.floor(index / 2);
              const shouldBeRounded = rowIndex % 2 === 0;
              const isLeftColumn = index % 2 === 0;
              let roundingClass = "";
              if (shouldBeRounded) {
                roundingClass = isLeftColumn
                  ? "rounded-tr-[70px]"
                  : "rounded-tl-[70px]";
              }

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden ${
                    item.col === 3 ? "col-span-3" : "col-span-2"
                  }
                ${roundingClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-90 transition-transform object-cover duration-400 group-hover:scale-110"
                  />
                  <Link
                    to={`/recreation/${item.id}`}
                    className="absolute cursor-pointer bg-theme-50 rounded-tl-[40px] text-2xl pl-9 pt-2.5 bottom-0 right-0 flex items-center gap-x-7"
                  >
                    {item.title}
                    <div className="rounded-full bg-[#FF8139] p-4 text-white">
                      <BsArrowUpRight />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Adventure;
