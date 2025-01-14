
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Confidentialites from './components/Confidentialites';
import Buttons from './components/Buttons';
import Formulaire from './components/Formulaire';
import SearchBar from './components/SearchBar';
import CardFavoris from './components/CardFavoris';
import CardHotel from './components/CardHotel';
import MentionsLegales from './components/MentionsLegales';
import Conditions from './components/Conditions';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CardsVols from './components/CardsVols';
import FetchFlights from "./components/FetchFlights";
import Enseignes from './components/Enseignes';
import HotelPays from './components/HotelPays';
import Banniere from './components/Banniere';
import BannierReservHotel from './components/BannierReservHotel';
import PageContact from './views/PageContact.jsx';

import PageHotel from './views/PageHotel.jsx';

import PageConfidentialites from './views/PageConfidentialites.jsx';
import PageConditions from './views/PageConditions.jsx';
import PageMentionsLegales from './views/PageMentionsLegales.jsx';
import PageAccueil from './views/PageAccueil.jsx';
import PageAffichageVols from './views/PageAffichageVols.jsx';
import PageFavoris from './views/PageFavoris.jsx';




function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/NavBar" element={<></>} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Confidentialites" element={<Confidentialites />} />
          <Route
            path="/Buttons"
            element={<Buttons iconName="user" iconClass="fill-red-500" />}
          />
          <Route path="/Card" element={<CardFavoris />} />
          <Route path="/CardHotel" element={<CardHotel />} />
          <Route
            path="/Formulaire"
            element={
              <Formulaire
                inputTextColor="text-colorB"
                inputBgColor="bg-colorW"
                inputBorder="text-colorB"
                inputBorderRadius="rounded-lg"
                inputNomText="Nom"
                inputPrenomText="Prénom"
                inputMailText="Email"
                inputSujetText="Sujet"
                inputMessageText="Message"
              />
            }
          />
          <Route path="/SearchBar" element={<SearchBar />} />

          <Route path="/MentionsLegales" element={<MentionsLegales />}/>
          <Route path="/Conditions" element={<Conditions />}/>
          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/MentionsLegales" element={<MentionsLegales />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/CardsVols" element={<CardsVols />}/>
          <Route path="/FetchFlights" element={<FetchFlights />} />
          <Route path="/Enseignes" element={<Enseignes />} />
          <Route path="/HotelPays" element={<HotelPays />} />
          <Route path="/Banniere" element={<Banniere />} />

          <Route path="/BannierReservHotel" element={<BannierReservHotel />}/>
          <Route path="/Contact" element={<PageContact />}/>
          <Route path="/PageHotel" element={<PageHotel />}/>

          <Route path="BannierReservHotel" element={<BannierReservHotel />}/>
          <Route path="/PageConfidentialites" element={<PageConfidentialites />} />
          <Route path="/PageConditions" element={<PageConditions />} />
          <Route path="/PageMentionsLegales" element={<PageMentionsLegales />} />
          <Route path="/PageAccueil" element={<PageAccueil />} />
          <Route path="/PageAffichageVols" element={<PageAffichageVols />} />
          <Route path="/PageFavoris" element={<PageFavoris />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;