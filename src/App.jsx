import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="bg-luxury-light dark:bg-luxury-black min-h-screen transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <SelectedWork />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
