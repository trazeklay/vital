import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-yellow-300">{t("home")}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300">{t("about")}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300">{t("contact")}</Link>
              </li>
            </ul>
            <div>
              <button 
                className="bg-white text-blue-600 px-3 py-1 rounded-lg mr-2 hover:bg-gray-200"
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
              <button 
                className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-200"
                onClick={() => changeLanguage("fr")}
              >
                Français
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
