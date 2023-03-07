import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./components/news/News";
import Predictions from "./components/prediction/Prediction";
import Fixtures from "./components/fixture/Fixture";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/predictions" element={<Predictions />}></Route>
        <Route path="/fixture" element={<Fixtures />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
