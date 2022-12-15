import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Game from "./screens/Game"
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">

      

      <Header />
      <Game/>
      <Footer />

      
      {/* <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/" element={<Games />} />
        <Route path="/count" element={<Result />} />
      </Routes> */}

    </div>
  );
}

export default App;