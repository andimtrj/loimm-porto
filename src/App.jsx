import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
