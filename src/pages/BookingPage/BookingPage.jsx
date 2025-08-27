import BookingForm from "../../components/SectionBookingForm/SectionBookingForm";

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
