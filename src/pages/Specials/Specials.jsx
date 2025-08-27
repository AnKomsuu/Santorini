import { useState, useEffect } from "react";
import axios from "axios";
import BookingForm from "../../components/SectionBookingForm/SectionBookingForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const SpecialsPage = () => {
  const [specials, setSpecials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const response = await axios.get("/db.json");
        if (response.data && response.data.specials) {
          setSpecials(response.data.specials);
        } else {
          setError("Раздел 'specials' не найден в db.json");
        }
      } catch (err) {
        setError("Не удалось загрузить данные.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecials();
  }, []);
  if (loading) {
    return <div className="container py-40 text-center">Загрузка...</div>;
  }
  if (error) {
    return (
      <div className="container py-40 text-center text-red-500">{error}</div>
    );
  }

  return (
    <section className="container">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="!static"
        >
          {specials.map((special) => (
            <SwiperSlide key={special.id}>
              <div>
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full h-[400px] object-cover mb-10 rounded-b-2xl"
                />
                <div className="grid grid-cols-2 gap-16">
                  <div className="">
                    <h2 className="text-4xl font-serif mb-4">
                      {special.title}
                    </h2>
                    <p className="text-bg-blue text-xl">
                      Предложение действительно до {special.date}
                    </p>
                    <p className="text-sm mb-6">{special.validUntil}</p>
                    <p className="text-lg leading-relaxed mb-8">
                      {special.description}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                      {special.conditionsTitle}
                    </h3>
                    <p className="">{special.conditionsText}</p>
                  </div>
                  <div className="">
                    <BookingForm
                      variant="simple"
                      title="Примите участие в акции"
                      buttonText="Принять участие"
                      itemName={`Акция "${special.title}"`}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev-custom absolute bottom-[-10%] left-[40%]  z-10 bg-orange-500 text-white p-3 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowBack className="text-3xl" />
        </div>
        <div className="swiper-button-next-custom absolute bottom-[-10%] right-[40%] z-10 bg-orange-500 text-white p-3 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowForward className="text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default SpecialsPage;
