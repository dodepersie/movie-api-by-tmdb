import { Routes, Route } from "react-router-dom";
import Main from "./../main/main.main";
import NowPlaying from "./../now_playing/main.now_playing";
import Popular from "./../popular/main.popular";
import Search from "./../search/main.search";
import Footer from "./Footer";
import NotFound from "./../main/404.main";

export const Layout = ({ children }) => (
  <div data-aos="fade-down">
    {children}
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route
        path="/now_playing"
        element={<NowPlaying desc="Movies that showing in Indonesia now!" />}
      ></Route>
      <Route
        path="/popular"
        element={<Popular desc="Movies that popular worldwide now!" />}
      ></Route>
      <Route
        path="/search"
        element={<Search desc="Search movie here.." />}
      ></Route>
      <Route
        path="*"
        element={
          <NotFound name="404" desc="Try to check where are you going! :)" />
        }
      ></Route>
    </Routes>
    <Footer />
  </div>
);
