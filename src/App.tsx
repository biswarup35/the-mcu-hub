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
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<BookingOutlet />}>
            <Route index element={<Booking />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
