import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import fon from "../../assets/attractionsFon.jpg";

const AttractionsPage = () => {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredPlaceId, setHoveredPlaceId] = useState(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get("/db.json");
        setAttractions(response.data.attractions);
      } catch {
        // silently handle error
      } finally {
        setLoading(false);
      }
    };
    fetchAttractions();
  }, []);

  if (loading) {
    return <div className="container py-40 text-center">Загрузка...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Достопримечательности — Santorini Hotel</title>
        <meta name="description" content="Достопримечательности Крыма рядом с отелем Santorini — рекомендации от консьержа с картой." />
      </Helmet>
      <section className="relative">
        <img className="w-full h-48 sm:h-80 md:h-130 object-cover" src={fon} alt="Достопримечательности Крыма" />
        <p
          className="absolute text-xl sm:text-3xl md:text-5xl text-center uppercase leading-tight
                          pt-4 md:pt-9 px-6 md:px-15 bg-theme-img rounded-tl-[30px] md:rounded-tl-[50px] font-serif bottom-0 md:bottom-[-20px] right-0"
        >
          Сокровища Крыма <br /> рядом с вами
        </p>
      </section>

      <section className="pt-12 md:pt-30">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-16">
            Рекомендации от Консьержа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-1 h-72 md:h-[500px] overflow-y-auto pr-2 md:pr-4 space-y-3 md:space-y-4 order-2 md:order-1">
              {attractions.map((place) => (
                <div
                  key={place.id}
                  className="p-3 md:p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onMouseEnter={() => setHoveredPlaceId(place.id)}
                  onMouseLeave={() => setHoveredPlaceId(null)}
                >
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-24 md:h-32 object-cover rounded-md mb-2 md:mb-3"
                  />
                  <h3 className="font-bold text-sm md:text-base">{place.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{place.description}</p>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 h-64 md:h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
              <YMaps>
                <Map
                  defaultState={{ center: [44.45, 34.09], zoom: 10 }}
                  width="100%"
                  height="100%"
                >
                  {attractions.map((place) => (
                    <Placemark
                      key={place.id}
                      geometry={place.coordinates}
                      properties={{
                        balloonContent: `<strong>${place.title}</strong>`,
                      }}
                      options={{
                        preset:
                          hoveredPlaceId === place.id
                            ? "islands#redIcon"
                            : "islands#blueIcon",
                      }}
                    />
                  ))}
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttractionsPage;
