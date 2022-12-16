import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

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