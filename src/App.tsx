import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import FAQs from './pages/FAQs'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
