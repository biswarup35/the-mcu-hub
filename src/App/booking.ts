import { proxy } from "valtio";

// const add = (num1:number, num2: number) => num1 + num2;

const ticket = proxy<{
  movie: string;
  seats: {
    price: number;
  }[];
  price: number;
  setPrice(price: number): void;
}>({
  movie: "",
  seats: [],
  price: 0,
  setPrice: () => {
    ticket.price = 0;
  },
});

export default ticket;
