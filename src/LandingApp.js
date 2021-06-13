import React from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Creations } from "./components/sections/creations/Creations";
import { Hero } from "./components/sections/hero/Hero";

export const LandingApp = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Creations />
        <Footer />
      </div>
    </>
  );
};
