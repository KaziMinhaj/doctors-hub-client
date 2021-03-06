import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ date, booking }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title">{booking.subject}</h5>
          <h6>{booking.visitingHour}</h6>
          <p>{booking.totalSpace} Space available</p>
          <button
            onClick={openModal}
            className="btn btn-primary text-uppercase"
          >
            Book Appointment
          </button>
          <AppointmentForm
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            appointmentOn={booking.subject}
            date={date}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
