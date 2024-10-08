import MainHeader from "./assets/components/MainHeader";
import Landing from "./assets/components/Landing";
import MainMenu from "./assets/components/MainMenu";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({ children }) {
  return (
    <Router>
      <section className="App">
      <MainHeader />
          <Routes>
            <Route path="/" element={<Landing>{children}</Landing>} />
            <Route path="/menu/*" element={<MainMenu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </section>
    </Router>
  );
}

export default App;
