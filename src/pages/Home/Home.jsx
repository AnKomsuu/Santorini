import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Comfort from "./Comfort/Comfort";
import Rooms from "./Rooms/Rooms";
import Services from "./Services/Services";
import Adventure from "./Adventure/Adventure";
import Offers from "./Offers/Offers";
import Video from "./Video/Video";

const Home = () => {
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState("Морские прогулки");

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);

      const adventureSection = document.getElementById("adventure-section");
      if (adventureSection) {
        adventureSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);
  return (
    <>
      <Comfort />
      <Rooms />
      <Services />
      <div id="adventure-section">
        <Adventure
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <Offers />
      <Video />
    </>
  );
};

export default Home;
