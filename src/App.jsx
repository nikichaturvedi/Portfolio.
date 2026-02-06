import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Journey />
        <Expertise />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
