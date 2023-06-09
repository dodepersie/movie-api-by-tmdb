import { Routes, Route } from "react-router-dom";
import { Container } from "@nextui-org/react";
import Main from "./../main/main.main";
import NowPlaying from "./../now_playing/main.now_playing";
import Popular from "./../popular/main.popular";
import Person from "./../person/main.person";
import Search from "./../search/main.search";
import Footer from "./Footer";
import NotFound from "./../main/404.main";

export const Layout = ({ children }) => (
  <>
    {children}
    <Container lg data-aos="fade-down">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/now_playing"
          element={<NowPlaying desc="Now Playing on Indonesian Cinema" />}
        ></Route>
        <Route
          path="/popular"
          element={<Popular desc="Popular Movies Worldwide" />}
        ></Route>
        <Route
          path="/person"
          element={<Person desc="Trending Actor & Actress" />}
        ></Route>
        <Route
          path="/search"
          element={<Search />}
        ></Route>
        <Route
          path="*"
          element={
            <NotFound name="404" desc="Try to check where are you going! :)" />
          }
        ></Route>
      </Routes>
      <Footer />
    </Container>
  </>
);
