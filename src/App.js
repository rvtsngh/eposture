
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <>
    <Router>
    <Routes>
         <Route  path="/" element={<Home />} />
         <Route  path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
       
    </>
  );
}

export default App;
