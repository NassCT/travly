import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import { 
  PageAccueil, PageVols, PageFavoris, 
  PageHotel, PageContact, PageConfidentialites, 
  PageConditions, PageMentionsLegales 
} from './views';

// Components
import { NavBar, Footer, CookiesComponent } from './components';

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
        </Routes>
        <Footer />
        <CookiesComponent />
      </div>
    </Router>
  );
}

export default App;