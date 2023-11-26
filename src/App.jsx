import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Layout from "./components/Layout";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
