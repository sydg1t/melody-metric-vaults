import logo from './logo.svg';
import Home from './Home';
import {Track} from './Track';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const NavBar = function () {
  return (
    <nav id='navbar'>
      <Link className='text-decoration-none' id='home-link' to="/">
        <h2 className='text-start font-weight-bold text-white ps-3'> <b>Melody  <br /> <span className='text-black'>Metric </span><br />Vaults</b></h2>
      </Link>
    </nav>
  )
}
const Footer = function () {
  return (
    <footer className='p-4 text-white d-flex flex-row justify-content-between'>
      <a href='https://developers.deezer.com/api/album' target='_blank'>Built using Deezer API</a>
      <span>
      <a href='https://chipper-lily-87dd91.netlify.app/' target='_blank'>Portfolio</a>
      <a href='https://www.linkedin.com/in/obsydion-slater-07615525b/' target='_blank'>LinkedIn</a>
      <a href='https://github.com/sydg1t' target='_blank'>Github</a>
      </span>
    </footer>
  )
}
function App() {
  let {trackId} = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="track/:trackId" element={<Track />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
