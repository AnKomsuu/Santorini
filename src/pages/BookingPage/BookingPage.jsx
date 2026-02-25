import { Helmet } from "react-helmet-async";
import BookingForm from "../../components/SectionBookingForm/SectionBookingForm";

const BookingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Бронирование — Santorini Hotel</title>
        <meta name="description" content="Забронируйте номер в отеле Santorini онлайн — быстро и удобно." />
      </Helmet>
      <BookingForm
        variant="full"
        showRoomType={true}
        title="Забронировать номер"
        buttonText="Забронировать"
      />
    </div>
  );
};

export default BookingPage;
