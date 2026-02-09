import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
      } catch (err) {
        setError("Не удалось загрузить данные.");
        console.error(err);
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
    <>
      <section className="container">
        {activity && (
          <div>
            <div className="relative">
              <img
                className="w-full h-140 object-cover"
                src={activity.fon}
                alt=""
              />
              <p
                className="absolute text-5xl uppercase
                          pt-9 w-170 pl-10 bg-theme-img rounded-tr-[50px] font-serif bottom-0"
              >
                {activity.title}
              </p>
            </div>
            <div className="grid grid-cols-[53%_47%] mt-18.5 gap-y-20">
              <p className="pr-25 text-lg">{activity.description}</p>
              <img
                className={`h-100 mx-auto object-cover rounded-tl-[70px] ${
                  activity.id > 8 ? "w-full" : ""
                }`}
                src={activity.image}
                alt=""
              />
              <h2 className="uppercase text-4xl ml-10 col-span-full">
                ЧТО ВАС ЖДЕТ
              </h2>
              <img
                className="h-145.5 w-full object-cover rounded-tr-[100px]"
                src={activity.activityImage}
                alt=""
              />
              <div className="ml-20 mb-35">
                {activity.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="mb-8 pb-5 border-b-2 border-theme-blue"
                  >
                    <h3 className="text-2xl font-semibold mb-3">
                      {highlight.title}
                    </h3>
                    <p>{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-5xl uppercase text-center mb-15">Что входит</h2>
            <div className="flex flex-wrap w-230 gap-20 justify-center mx-auto mb-35">
              {activity.includes.map((item) => (
                <div key={item} className="flex flex-col gap-y-5 items-center">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={item.img}
                    alt=""
                  />
                  <p className="text-xl w-40 600 text-center">{item.text}</p>
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
    </>
  );
};
export default ActivityDetailsPage;
