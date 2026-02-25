import fon from "../../../assets/fon.png";
import HeroBookingForm from "../../../components/HeroBookingForm/HeroBookingForm";
const Comfort = () => {
  return (
    <section
      className="h-64 sm:h-96 md:h-150 lg:h-200 bg-no-repeat bg-cover bg-center w-full max-w-[1508px] mx-auto relative"
      style={{ backgroundImage: `url(${fon})` }}
    >
      <div className="absolute bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 w-full px-4 md:px-0">
        <HeroBookingForm />
      </div>
    </section>
  );
};

export default Comfort;
