import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Confidentialites from './components/Confidentialites';
import Buttons from './components/Buttons';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Confidentialites" element={<Confidentialites />} />
          <Route path="/Buttons" element={<Buttons iconName="user" iconClass="fill-red-500" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;