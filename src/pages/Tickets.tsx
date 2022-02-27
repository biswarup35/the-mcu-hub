import { Divider, Stack } from "../components";

import ticketState from "../App/tickets";
import { useSnapshot } from "valtio";
const Tickets = () => {
  const { tickets: movies } = useSnapshot(ticketState, { sync: true });
  const tickets = movies.map((ticket) => ticket).reverse();

  return (
    <Stack
      style={{ minHeight: "100%" }}
      justifyContent="center"
      alignItems="center"
    >
      <h2>All Tickets</h2>
      <Stack>
        {tickets.map((ticket) => (
          <Stack className="my-1" key={ticket.order_id}>
            <p>Movie: {ticket.movie}</p>
            <p>Seats: {ticket.seats}</p>
            <p>Amount: {(ticket.amount / 100).toFixed(2)}</p>
            <p>Created at: {new Date(ticket.create_at).toLocaleString()}</p>
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tickets;
