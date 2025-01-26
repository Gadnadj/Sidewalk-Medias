import Headers from './components/Headers';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Contact from './Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Brands from './components/Brands';
import SectionDivider from './components/SectionDivider';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <div className="overflow-x-hidden">
        <Headers />
        <LanguageToggle />
        <Hero />
        <SectionDivider bgColor="bg-primary" />
        <Brands />
        <About />
        <SectionDivider bgColor="bg-secondary" />
        <Skills />
        <SectionDivider bgColor="bg-secondary" />
        <Portofolio />
        <SectionDivider bgColor="bg-tertiary" />
        <Services />
        <SectionDivider bgColor="bg-tertiary"/>
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
