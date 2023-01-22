import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/Home";
import Game from "./screens/Game";
import Footer from "./components/Footer";
import Characters from "./components/Characters";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;