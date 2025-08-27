import { useState, useEffect } from "react";
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
      } catch (err) {
        console.error("Ошибка загрузки достопримечательностей:", err);
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
      <section className="relative">
        <img className="w-full h-130 object-cover" src={fon} alt="" />
        <p
          className="absolute text-5xl text-center uppercase leading-tight
                          pt-9 px-15 bg-theme-img rounded-tl-[50px] font-serif bottom-[-20px] right-0"
        >
          Сокровища Крыма <br /> рядом с вами
        </p>
      </section>

      <section className="pt-30">
        <div className="container">
          <h2 className="text-4xl font-serif text-center mb-16">
            Рекомендации от Консьержа
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 h-[500px] overflow-y-auto pr-4 space-y-4">
              {attractions.map((place) => (
                <div
                  key={place.id}
                  className="p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  onMouseEnter={() => setHoveredPlaceId(place.id)}
                  onMouseLeave={() => setHoveredPlaceId(null)}
                >
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-bold">{place.title}</h3>
                  <p className="text-sm text-gray-500">{place.description}</p>
                </div>
              ))}
            </div>

            <div className="col-span-2 h-[500px] rounded-lg overflow-hidden">
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
