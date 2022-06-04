import React from "react";
import "./App.css";
import {
  About,
  Hero,
  Contact,
  Footer,
  ItBerries,
  Portfolio,
  Skills,
} from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <ItBerries />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
