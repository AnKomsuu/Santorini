import fon from "../../assets/RecreationFon.png";
import svg from "../../assets/Recreation.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

const RecreationPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("/db.json");

        if (response.data && response.data.activities) {
          setActivities(response.data.activities);
        } else {
          setError("Раздел 'activities' не найден в db.json");
        }
      } catch (err) {
        setError("Не удалось загрузить данные.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="container py-20 text-center">Загрузка активностей...</div>
    );
  }

  if (error) {
    return (
      <div className="container py-20 text-center text-red-500">{error}</div>
    );
  }
  return (
    <section className="container">
      <div className="relative mb-37.5">
        <img className="rounded-b-2xl" src={fon} alt="" />
        <p
          className="absolute bottom-0 left-[24%] text-5xl uppercase
                          pt-9 px-25 bg-theme-img rounded-t-[50px] font-serif"
        >
          Активный отдых
        </p>
        <img className="absolute bottom-[-100px] left-[65%]" src={svg} alt="" />
      </div>
      <div className="grid grid-cols-5 gap-15">
        {activities.slice(0, visibleCount).map((activity, index) => {
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
              key={activity.id}
              className={` relative group overflow-hidden
              ${activity.cols === 3 ? "col-span-3" : "col-span-2"} 
              ${roundingClass}
            `}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full cursor-pointer h-90 object-cover duration-400 group-hover:scale-110"
              />
              <Link
                to={`/recreation/${activity.id}`}
                className="absolute cursor-pointer bg-theme-img rounded-tl-[40px] text-2xl pl-9 pt-2.5 bottom-0 right-0 flex items-center gap-x-7"
              >
                {activity.title}
                <div className="rounded-full bg-[#FF8139] p-4 text-white">
                  <BsArrowUpRight />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-16">
        {visibleCount < activities.length ? (
          <button
            onClick={() =>
              setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE)
            }
            className="px-10 cursor-pointer py-4 uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
          >
            Смотреть еще
          </button>
        ) : (
          activities.length > ITEMS_PER_PAGE && (
            <button
              onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
              className="px-10 py-4 uppercase cursor-pointer border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors"
            >
              Свернуть
            </button>
          )
        )}
      </div>
    </section>
  );
};
export default RecreationPage;
