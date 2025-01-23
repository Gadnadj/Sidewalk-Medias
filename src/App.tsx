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

function App() {


  return (
    <div>
      <Headers />
      <Hero />
      <SectionDivider bgColor="bg-primary" />
      <Brands />
      <SectionDivider />
      <About />
      <SectionDivider bgColor="bg-tertiary" />
      <Skills />
      <SectionDivider />
      <Portofolio />
      <SectionDivider bgColor="bg-tertiary" />
      <Services />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTopButton />
      <div >

      </div>
    </div>
  );
}

export default App;
