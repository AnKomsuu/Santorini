import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      } catch {
        setError("Не удалось загрузить данные.");
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
      <Helmet>
        <title>Спецпредложения — Santorini Hotel</title>
        <meta name="description" content="Специальные предложения и акции отеля Santorini — выгодные условия для вашего отдыха." />
      </Helmet>
      <div className="relative pb-16 md:pb-20">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
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
                  loading="lazy"
                  className="w-full h-48 sm:h-72 md:h-[400px] object-cover mb-6 md:mb-10 rounded-b-2xl"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-serif mb-3 md:mb-4">
                      {special.title}
                    </h2>
                    <p className="text-bg-blue text-base md:text-xl">
                      Предложение действительно до {special.date}
                    </p>
                    <p className="text-sm mb-4 md:mb-6">{special.validUntil}</p>
                    <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-8">
                      {special.description}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                      {special.conditionsTitle}
                    </h3>
                    <p className="text-sm md:text-base">{special.conditionsText}</p>
                  </div>
                  <div>
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

        <div className="swiper-button-prev-custom absolute bottom-0 left-1/3 md:left-[40%] z-10 bg-orange-500 text-white p-2 md:p-3 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowBack className="text-xl md:text-3xl" />
        </div>
        <div className="swiper-button-next-custom absolute bottom-0 right-1/3 md:right-[40%] z-10 bg-orange-500 text-white p-2 md:p-3 rounded-full cursor-pointer hover:bg-orange-600">
          <IoArrowForward className="text-xl md:text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default SpecialsPage;
