import { Routes, Route } from "react-router-dom";
import Main from "./../main/main.main";
import NowPlaying from "./../now_playing/main.now_playing";
import Popular from "./../popular/main.popular";
import Search from "./../search/main.search";
import { Box } from "./Box.js";
import Footer from "./Footer";

export const Layout = ({ children }) => (
  <>
    <Box
      css={{
        maxW: "100%",
      }}
      data-aos="fade-down"
    >
      {children}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              name="MoofliXXI"
              desc="Simple website to see popular movies, see playing movies on cinema and search for movies!"
            />
          }
        ></Route>
        <Route
          path="/now_playing"
          element={<NowPlaying desc="Movies playing in Indonesia right now!" />}
        ></Route>
        <Route
          path="/popular"
          element={<Popular desc="Popular movies worldwide!" />}
        ></Route>
        <Route
          path="/search"
          element={<Search desc="Search movie here.." />}
        ></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
      <Footer />
    </Box>

  </>
);
