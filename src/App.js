import React from "react";
import Header from "./Component.js/Header";
import { Routes, Route } from "react-router-dom";
// import ScriptTag from "react-script-tag";
import Homepage from "./Component.js/Homepage";
import { Helmet } from "react-helmet";
import Footer from "./Component.js/Footer";
import Aboutpage from "./Aboutpage";
import Causespage from "./Causespage";
import Eventpage from "./Eventpage";
import Contactpage from "./Contactpage";

function Home()
{
    return(
        <>
        <Header email="Info@YourDomain.com" mobile="+(333) 052 39876" />
        <Homepage/>
        <Footer/>
        </>
    );
}


function App() {
  return (
    <div className="App">
      <Helmet>
      <script src="js/main.js"></script>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/causes" element={<Causespage/>} />
        <Route path="/event" element={<Eventpage/>} />
        <Route path="/contact" element={<Contactpage/>} />
      </Routes>
    </div>
  );
}

export default App;
