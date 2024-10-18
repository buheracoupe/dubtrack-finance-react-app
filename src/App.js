import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import Resources from './components/Pages/Resources';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App font-quicksand text-secondary">
    <Header />
    <Home />
    <Dashboard />
    <Resources />
    <About />
    <Contact />
    </div>
  )
}

export default App;
