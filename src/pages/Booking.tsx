import { Outlet, Navigate } from "react-router-dom";
export const BookingOutlet = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export const Booking = () => {
  return <div>Booking page</div>;
};
