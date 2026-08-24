import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import About from './components/About';
import Services from './components/Services';
import Specialists from './components/Specialists';
import WhyAurelis from './components/WhyAurelis';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StickyMobileButtons from './components/StickyMobileButtons';

function App() {
  return (
    <div className="min-h-screen bg-bg-light font-sans text-primary-900 selection:bg-medical-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <WhyAurelis />
        <Facilities />
        <Specialists />
        <Testimonials />
        <Insights />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <StickyMobileButtons />
    </div>
  );
}

export default App;
