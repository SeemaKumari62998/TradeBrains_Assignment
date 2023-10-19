import "./App.css";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/watchlist/watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </div>
    </div>
  );
}

export default App;
