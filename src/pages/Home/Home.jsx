import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Comfort from "./Comfort/Comfort";
import Rooms from "./Rooms/Rooms";
import Services from "./Services/Services";
import Adventure from "./Adventure/Adventure";
import Offers from "./Offers/Offers";
import Video from "./Video/Video";
import FadeIn from "../../components/UI/FadeIn";

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
      <FadeIn>
        <Comfort />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Rooms />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Services />
      </FadeIn>
      <FadeIn delay={0.3}>
        <div id="adventure-section">
          <Adventure
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.4}>
        <Offers />
      </FadeIn>
      <FadeIn delay={0.5}>
        <Video />
      </FadeIn>
    </>
  );
};

export default Home;
