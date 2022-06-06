import React from "react";
import "./App.css";
import {
  About,
  Hero,
  Contact,
  Footer,
  ItBerries,
  Portfolio,
} from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <ItBerries />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
