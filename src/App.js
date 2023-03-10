import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Predictions from "./pages/Predictions";
import Fixtures from "./pages/Fixtures";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fixture" element={<Fixtures />}></Route>
          <Route path="/predictions" element={<Predictions />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
