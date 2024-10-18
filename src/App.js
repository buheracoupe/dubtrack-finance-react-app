import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App font-quicksand text-secondary">
    <Header />
    <Home />
    <Dashboard />
    <About />
    <Contact />
    </div>
  )
}

export default App;
