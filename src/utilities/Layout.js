import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@nextui-org/react";
import Footer from "./Footer";

const Main = React.lazy(() => import('./../main/main.main'))
const NowPlaying = React.lazy(() => import('./../now_playing/main.now_playing'))
const Popular = React.lazy(() => import('./../popular/main.popular'))
const Person = React.lazy(() => import('./../person/main.person'))
const Search = React.lazy(() => import('./../search/main.search'))
const NotFound = React.lazy(() => import('./../main/404.main'))

export const Layout = ({ children }) => (
  <div data-aos="fade-down">
    {children}
    <Container lg style={{ minHeight: "80vh", position: "relative" }}>
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
        <Route path="/search" element={<Search />}></Route>
        <Route
          path="*"
          element={
            <NotFound name="404" desc="Try to check where are you going! :)" />
          }
        ></Route>
      </Routes>
    </Container>
    <Footer />
  </div>
);
