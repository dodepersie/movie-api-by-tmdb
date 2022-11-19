import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main/main.main';
import Nav from './utilities/nav';
import NowPlaying from './now_playing/main.now_playing';
import Popular from './popular/main.popular';
import Search from './search/main.search';

import './App.css';
import './modal.css';

const App = () => {

  return (
    <>
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/now_playing" element={<NowPlaying />}></Route>
          <Route path="/search" element={<Search  />}></Route>
          <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;