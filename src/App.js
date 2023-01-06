import React from "react";
import Analytics from "./containers/Analytics";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
