import React from "react";

import { Navbar } from "../../layout/Navbar";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <main className="hero" type="hero">
        <div className="main-title">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </main>
    </>
  );
};
