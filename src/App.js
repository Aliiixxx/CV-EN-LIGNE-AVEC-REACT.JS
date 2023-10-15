import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import Realisations from "./pages/realisations";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Mentionslegals from "./pages/mentionsLegals";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mentionslegals" element={<Mentionslegals />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
