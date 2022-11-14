// CSS
import "./App.css";

// Hooks and Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col justify-between h-screen">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="404" element={<Notfound />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
