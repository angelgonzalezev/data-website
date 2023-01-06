import React from "react";
import Analytics from "./containers/Analytics";
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
    </div>
  );
}

export default App;
