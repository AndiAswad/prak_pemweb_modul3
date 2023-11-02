import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.jsx";

// Import komponen-komponen halaman
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/footer.jsx";
import "E:/KULIAH/MY DOCS/SEMESTER 5/PEM WEB/MODUL3/Demo/web_ilab/src/style/Style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footerr />
    </Router>
  );
}

function Footerr() {
  // const location = useLocation();

  // Tampilkan footer hanya jika bukan halaman AboutUs atau Contact
  // if (location.pathname !== "/AboutUs" && location.pathname !== "/Contact") {
  return <Footer />;
  // }

  // return null;
}

export default App;
