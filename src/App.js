import { useState } from "react";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <>
      <Nav />
      <Body />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
