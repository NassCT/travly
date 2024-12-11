import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Confidentialites from './components/Confidentialites';
import Buttons from './components/Buttons';
import Formulaire from './components/Formulaire';


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
          <Route path="/Buttons" element={<Buttons iconName="user" iconClass="fill-red-500" />} />
          <Route path="/Formulaire" element={
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;