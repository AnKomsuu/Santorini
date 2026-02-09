import BookingForm from "../components/booking/SectionBookingForm";

const BookingPage = () => {
  return (
    <div>
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
