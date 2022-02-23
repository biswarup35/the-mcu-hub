import { Container, Grid } from "../components";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMovie } from "../hooks";
import { useRef } from "react";
export const BookingOutlet = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const Booking = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("q");
  const { data } = useMovie(id ?? "");

  const formRef = useRef<HTMLFormElement>(null);

  if (formRef) {
    let current = formRef.current;
    let test = current?.querySelector("input")?.getAttribute("name");
    console.log(test);
  }

  return (
    <div>
      <div className="bg-primary">
        <Container className="py-3 radius-1" maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={data.poster} alt="poster" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>{data.title}</h3>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className="my-2">
        <h3 style={{ textAlign: "center" }}>Screen this side</h3>
        <form ref={formRef}>
          <label>
            <input type="checkbox" name="grad" value="Yes" />
            Yes
          </label>
          <label>
            <input type="checkbox" name="grad" value="No" />
            No
          </label>
        </form>
      </Container>
    </div>
  );
};
