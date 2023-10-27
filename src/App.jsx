import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Hobbies from "./pages/Hobbies";
import Education from "./pages/Education";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pages/work">Work</Link>
        <Link>to=""</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      <footer>
        <p>&copy; Tim the Bin</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

import PageStructure from "./components/PageStructure";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ErrorPage from "./pages/404";
import ThankYou from "./pages/ThankYou";
