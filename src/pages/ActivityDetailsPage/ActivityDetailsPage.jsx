import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import SectionBookingForm from "../../components/SectionBookingForm/SectionBookingForm";

const ActivityDetailsPage = () => {
  const { activityId } = useParams();

  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get("/db.json");
        const allActivities = response.data.activities;

        const currentActivity = allActivities.find(
          (item) => item.id === Number(activityId)
        );

        if (currentActivity) {
          setActivity(currentActivity);
        } else {
          setError("Активность с таким ID не найдена.");
        }
      } catch {
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, [activityId]);

  if (loading) {
    return <div className="container py-40 text-center">Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="container py-40 text-center text-red-500">
        {error}
        <div className="mt-4">
          <Link to="/recreation">Вернуться к списку</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="container">
      {activity && (
        <div>
          <Helmet>
            <title>{activity.title} — Santorini Hotel</title>
            <meta name="description" content={activity.description?.slice(0, 160) || ""} />
          </Helmet>
          <div className="relative">
            <img
              className="w-full h-48 sm:h-72 md:h-140 object-cover"
              src={activity.fon}
              alt={activity.title}
            />
            <p
              className="absolute text-xl sm:text-3xl md:text-5xl uppercase
                        pt-4 md:pt-9 w-full md:w-170 pl-4 md:pl-10 bg-theme-img rounded-tr-[30px] md:rounded-tr-[50px] font-serif bottom-0"
            >
              {activity.title}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[53%_47%] mt-8 md:mt-18.5 gap-y-8 md:gap-y-20">
            <p className="md:pr-25 text-base md:text-lg">{activity.description}</p>
            <img
              className={`h-48 sm:h-72 md:h-100 mx-auto object-cover rounded-tl-[40px] md:rounded-tl-[70px] w-full ${
                activity.id > 8 ? "md:w-full" : ""
              }`}
              src={activity.image}
              alt=""
            />
            <h2 className="uppercase text-2xl md:text-4xl md:ml-10 col-span-full">
              ЧТО ВАС ЖДЕТ
            </h2>
            <img
              className="h-48 sm:h-80 md:h-145.5 w-full object-cover rounded-tr-[50px] md:rounded-tr-[100px]"
              src={activity.activityImage}
              alt=""
            />
            <div className="md:ml-20 mb-12 md:mb-35">
              {activity.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="mb-4 md:mb-8 pb-3 md:pb-5 border-b-2 border-theme-blue"
                >
                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-base">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl uppercase text-center mb-8 md:mb-15">Что входит</h2>
          <div className="flex flex-wrap max-w-5xl gap-8 md:gap-20 justify-center mx-auto mb-16 md:mb-35">
            {activity.includes.map((item) => (
              <div key={item} className="flex flex-col gap-y-3 md:gap-y-5 items-center">
                <img
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
                  src={item.img}
                  alt=""
                />
                <p className="text-sm md:text-xl w-28 md:w-40 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <SectionBookingForm
        variant="simple"
        itemName={`Активность "${activity.title}"`}
      />
    </section>
  );
};
export default ActivityDetailsPage;
