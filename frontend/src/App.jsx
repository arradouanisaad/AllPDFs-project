import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Help from "./pages/Help";
import { tools } from "./config/tools";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          {tools.map((tool) => (
            <Route
              key={tool.id}
              path={tool.path}
              element={<tool.component />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}