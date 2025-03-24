import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NewHome from "./pages/NewHome";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
        <AnimatedRoutes/>
    </>
  );
}

export default App;
