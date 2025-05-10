import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Problem from './pages/Problem';
import StoriesPage from './pages/Stories';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;