import React from "react";
import { Footer } from "./components/layout/Footer";
import { About } from "./components/sections/about/About";
import { Creations } from "./components/sections/creations/Creations";
import { Hero } from "./components/sections/hero/Hero";

export const LandingApp = () => {
  return (
    <>
        <Hero />
        <About />
        <Creations />
        <Footer />
    </>
  );
};
