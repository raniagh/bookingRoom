"use client";

import CancelBooking from "../app/actions/cancelBooking";

const CancelBookingButtom = ({ bookingId }) => {
  const handleCancelClick = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      const result = await CancelBooking(bookingId);
      if (result.success) {
        toast.success("Booking cancelled successfully!");
      }
    } catch (error) {}
  };

  return (
    <button
      onClick={handleCancelClick}
      className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700'
    >
      Cancel Booking
    </button>
  );
};

export default CancelBookingButtom;
