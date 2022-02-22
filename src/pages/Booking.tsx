import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export const BookingOutlet = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const Booking = () => {
  return <div>Booking page</div>;
};
