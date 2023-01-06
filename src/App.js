import React from "react";
import Analytics from "./containers/Analytics";
import Cards from "./containers/Cards";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Newsletter from "./containers/Newsletter";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards/>
      <Footer />
    </div>
  );
}

export default App;
