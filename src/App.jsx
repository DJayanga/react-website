import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Plans from "./pages/plans";
import Trainers from "./pages/trainers";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <NotFound />
      <Plans />
      <Trainers />
    </BrowserRouter>
  );
};

export default App;
