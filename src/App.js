import './sass/app.css';
import Header from "./components/header/Header";
import Dotnav from "./components/nav/Dotnav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
          <Header />
          <Dotnav />
          <Hero />
          <About />
          <Work />
          <Skill />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
