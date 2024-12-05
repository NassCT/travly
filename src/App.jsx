import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/NavBar" element={<NavBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;