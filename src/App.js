import React from "react"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
