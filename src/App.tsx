import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation(); // Ensure i18n is obtained from useTranslation

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // This should now work correctly
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">{t("home")}</Link></li>
          <li><Link to="/about">{t("about")}</Link></li>
          <li><Link to="/contact">{t("contact")}</Link></li>
        </ul>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("fr")}>Français</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
