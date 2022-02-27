import { proxy } from "valtio";

interface ITicket {
  movie: string;
  amount: number;
  create_at: string;
  seats: string;
  id: string;
  order_id: string;
}

const key = "tickets";

const setTickets = (): ITicket[] => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(key) === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem(key) ?? "[]");
  } else {
    return [];
  }
};

const ticketState = proxy<{
  tickets: ITicket[];
  addTicket(ticket: ITicket): void;
  findTicket(id: string): ITicket | undefined;
}>({
  tickets: setTickets(),
  addTicket: (ticket: ITicket) => {
    if (typeof window !== "undefined") {
      let tickets = JSON.parse(localStorage.getItem(key) || "[]");
      tickets.push(ticket);
      localStorage.setItem(key, JSON.stringify(tickets));
      ticketState.tickets = setTickets();
    }
  },
  findTicket: (id: string) => {
    let tickets: ITicket[] = ticketState.tickets;
    return tickets.find((ticket: ITicket) => ticket.id === id);
  },
});

export default ticketState;
