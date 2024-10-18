import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Resources from './components/Pages/Resources';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter >
    <div className="App font-quicksand text-secondary">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
    </div>
    </BrowserRouter>
  )
}

export default App;
