import "./App.css";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/watchlist/watchlist";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/watchlist" element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
        {/* <Home/> */}
      </div>
    </div>
  );
}

export default App;
