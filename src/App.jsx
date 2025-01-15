import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Views
import {
  PageAccueil,
  PageVols,
  PageHotel,
  PageFavoris,
  PageMentionsLegales,
  PageConfidentialites,
  PageConditions,
  PageContact,
  PageGestionCookies
} from "./views";

// Components
import { NavBar, CookiesComponent, Footer } from "./components";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/vols" element={<PageVols />} />
          <Route path="/favoris" element={<PageFavoris />} />
          <Route path="/hotels" element={<PageHotel />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/confidentialites" element={<PageConfidentialites />} />
          <Route path="/conditions" element={<PageConditions />} />
          <Route path="/mentions-legales" element={<PageMentionsLegales />} />
          <Route path="/gestion-cookies" element={<PageGestionCookies />} />
        </Routes>
        <Footer />
        <CookiesComponent />
      </div>
    </Router>
  );
}

export default App;
