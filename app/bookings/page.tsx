import Heading from "../../components/Heading";
import getMyBookings from "../actions/getMyBookings";
import BookedRoomCard from "../../components/BookedRoomCard";

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  if (!Array.isArray(bookings)) {
    // If bookings is not an array, it's the error object
    return <p className='text-red-600'>{bookings.error}</p>;
  }

  return (
    <>
      <Heading title='My Bookings' />
      {bookings.length === 0 ? (
        <p className='text-gray-600 mt-4'>You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;
