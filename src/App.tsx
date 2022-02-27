import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Movie,
  NotFound,
  WatchList,
  Login,
  BookingOutlet,
  Booking,
  LoginOutlet,
  ThankYou,
  Tickets,
} from "./pages";
import { Navbar, Footer, Loading } from "./views";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":show_id" element={<Movie />} />
          </Route>
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="/login" element={<LoginOutlet />}>
            <Route index element={<Login />} />
          </Route>
          {/* Auth Pages */}
          <Route element={<BookingOutlet />}>
            <Route path="/booking" element={<Booking />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
