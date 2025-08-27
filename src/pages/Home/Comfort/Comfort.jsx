import fon from "../../../assets/fon.png";
import HeroBookingForm from "../../../components/HeroBookingForm/HeroBookingForm";
const Comfort = () => {
  return (
    <section
      className="h-200 bg-no-repeat w-377 mx-auto relative"
      style={{ backgroundImage: `url(${fon})` }}
    >
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full">
        <HeroBookingForm />
      </div>
    </section>
  );
};

export default Comfort;
