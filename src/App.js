import About from "./components/About/About";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar'
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      {/* <NavBar /> */}
    </>
  );
}

export default App;
