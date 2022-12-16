import Home from "./screens/Home";
import Result from "./screen/Result";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Game from "./screens/Game";
import Footer from "./components/Footer";

import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Characters />
      {/* <Game />
      <Result />
      <Footer /> */}

      <Footer />

      <Header />
      {/* <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/" element={<Games />} />
        <Route path="/count" element={<Result />} />
      </Routes> */}
    </div>
  );
}

export default App;