import { Button, Stack } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import ticketState from "../App/tickets";
import { useSnapshot } from "valtio";
const ThankYou = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const id = new URLSearchParams(search).get("id");
  const { findTicket } = useSnapshot(ticketState, { sync: true });
  const ticket = findTicket(id ?? "");

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <Stack
      style={{ minHeight: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      <h2>Thank You, your ticket successfully booked!</h2>
      <Stack>
        <h2>Your Ticket:</h2>
        <p>Movie: {ticket.movie}</p>
        <p>Seats: {ticket.seats}</p>
        <p>Amount: {(ticket.amount / 100).toFixed(2)}</p>
        <p>Created at: {new Date(ticket.create_at).toLocaleString()}</p>
      </Stack>
      <div className="my-2">
        <Stack direction="row">
          <Button
            onClick={() => {
              navigate("/tickets");
            }}
            className="py-1 px-2 radius-1"
          >
            View Tickets
          </Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
            className="py-1 px-2 radius-1"
          >
            Go Home
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default ThankYou;
