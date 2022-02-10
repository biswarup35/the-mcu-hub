import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Movie, NotFound } from "./pages";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
