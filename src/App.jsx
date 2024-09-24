import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./fonts/style.css";
import "./App.css";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
    </>
  );
}

export default App;
