import fon from "../../assets/RecreationFon.png";
import svg from "../../assets/Recreation.svg";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      } catch {
        setError("Не удалось загрузить данные.");
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
      <Helmet>
        <title>Активный отдых — Santorini Hotel</title>
        <meta name="description" content="Активный отдых в отеле Santorini — морские прогулки, рыбалка, экстрим и многое другое." />
      </Helmet>
      <div className="relative mb-16 md:mb-37.5">
        <img className="rounded-b-2xl w-full" src={fon} alt="Активный отдых" />
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[24%] text-2xl md:text-5xl uppercase
                          pt-4 md:pt-9 px-8 md:px-25 bg-theme-img rounded-t-[30px] md:rounded-t-[50px] font-serif text-center md:text-left whitespace-nowrap"
        >
          Активный отдых
        </p>
        <img className="absolute bottom-[-50px] md:bottom-[-100px] left-[65%] hidden md:block" src={svg} alt="" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-15">
        {activities.slice(0, visibleCount).map((activity, index) => {
          const rowIndex = Math.floor(index / 2);
          const shouldBeRounded = rowIndex % 2 === 0;
          const isLeftColumn = index % 2 === 0;
          let roundingClass = "";
          if (shouldBeRounded) {
            roundingClass = isLeftColumn
              ? "md:rounded-tr-[70px]"
              : "md:rounded-tl-[70px]";
          }

          return (
            <div
              key={activity.id}
              className={`relative group overflow-hidden rounded-lg md:rounded-none
              col-span-1 ${activity.cols === 3 ? "md:col-span-3" : "md:col-span-2"}
              ${roundingClass}
            `}
            >
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                className="w-full cursor-pointer h-40 sm:h-60 md:h-90 object-cover duration-400 group-hover:scale-110"
              />
              <Link
                to={`/recreation/${activity.id}`}
                className="absolute cursor-pointer bg-theme-img rounded-tl-[20px] md:rounded-tl-[40px] text-xs md:text-2xl pl-3 md:pl-9 pt-1 md:pt-2.5 bottom-0 right-0 flex items-center gap-x-2 md:gap-x-7"
              >
                <span className="hidden sm:inline">{activity.title}</span>
                <div className="rounded-full bg-[#FF8139] p-2 md:p-4 text-white">
                  <BsArrowUpRight />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10 md:mt-16">
        {visibleCount < activities.length ? (
          <button
            onClick={() =>
              setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE)
            }
            className="px-6 md:px-10 cursor-pointer py-3 md:py-4 uppercase border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors text-sm md:text-base"
          >
            Смотреть еще
          </button>
        ) : (
          activities.length > ITEMS_PER_PAGE && (
            <button
              onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
              className="px-6 md:px-10 py-3 md:py-4 uppercase cursor-pointer border-2 border-theme-blue rounded-lg text-theme-blue font-medium hover:bg-bg-blue hover:text-white transition-colors text-sm md:text-base"
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
