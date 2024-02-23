import logo from './logo.svg';
import Home from './Home';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
