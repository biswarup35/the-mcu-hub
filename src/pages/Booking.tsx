import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSnapshot } from "valtio";
import { Fragment } from "react";
import { Button, Container, Grid, Stack } from "../components";
import { useMovie } from "../hooks";
import ticket from "../App/booking";
import { Chair } from "../views";
import { ScreenIcon } from "../icons";

const getRowName = new Map<number, string>([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
  [4, "E"],
  [5, "F"],
  [6, "G"],
  [7, "H"],
]);

export const BookingOutlet = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const Booking = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("q");
  const { data } = useMovie(id ?? "");
  const { rows, selectSeat, selectedSeats, setMovie } = useSnapshot(ticket, {
    sync: true,
  });

  setMovie(data.title);

  const total = selectedSeats().reduce((acc, seat) => {
    return acc + seat.price;
  }, 0);

  const seats = selectedSeats().map((seat) => seat.name);

  return (
    <div>
      <div className="bg-primary">
        <Container className="py-3 radius-1" maxWidth="md">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              style={{ justifySelf: "center", alignSelf: "center" }}
            >
              <img src={data.poster} alt="poster" />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="my-2">
                <h3 style={{ textAlign: "center" }}>{data.title}</h3>
              </div>
              {seats.length > 0 && (
                <Fragment>
                  <Stack direction="row" justifyContent="space-between">
                    <h4>{`Your Total Price: ${total} INR`}</h4>
                    <h4>{`Your Total Seat(s): ${seats.length}`}</h4>
                  </Stack>
                  <Stack className="my-1" direction="row">
                    <h4>Your Seat(s):</h4>
                    <Stack direction="row">
                      {seats.map((seat) => (
                        <h4 key={seat}>{seat}</h4>
                      ))}
                    </Stack>
                  </Stack>
                  <Stack
                    className="my-2"
                    direction="row"
                    justifyContent="center"
                  >
                    <Button className="px-2 py-1 radius-1 ">Confirm</Button>
                  </Stack>
                </Fragment>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className="my-2" maxWidth="md">
        <Stack direction="row" justifyContent="center">
          <ScreenIcon />
        </Stack>
        <div className="py-3" />
        <div className="py-3" />
        {rows.map((row, rowIndex) => (
          <Stack key={rowIndex} direction="row" gap={2}>
            <p>{getRowName.get(rowIndex)}</p>
            <Grid container style={{ flexGrow: 1 }}>
              {row.map((seat, colIndex) => (
                <Fragment key={colIndex}>
                  <Grid item xs={1}>
                    <Chair
                      isBooked={seat.isBooked}
                      isSelected={seat.isSelected}
                      onSelect={(e) => {
                        if (!seat.isBooked) {
                          selectSeat(rowIndex, colIndex, e);
                        }
                      }}
                    />
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Stack>
        ))}
      </Container>
    </div>
  );
};
