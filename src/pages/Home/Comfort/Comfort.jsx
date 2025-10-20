import fon from "../../../assets/fon.png";
import HeroBookingForm from "../../../components/HeroBookingForm/HeroBookingForm";
const Comfort = () => {
  return (
    <section
      className="h-[60vh] md:h-[80vh] lg:h-screen bg-no-repeat bg-cover bg-center w-full mx-auto relative"
      style={{ backgroundImage: `url(${fon})` }}
    >
      <div className="absolute bottom-0 md:bottom-12 left-1/2 -translate-x-1/2 w-full px-4">
        <HeroBookingForm />
      </div>
    </section>
  );
};

export default Comfort;
