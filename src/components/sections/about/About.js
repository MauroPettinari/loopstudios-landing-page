import React from "react";

import aboutImg from "../../../assets/images/mobile/image-interactive.jpg";

export const About = () => {
  return (
    <section className="about" type="about">
      <img src={aboutImg} alt="Interactive VR" />
      <div className="info">
        <h2 className="title"> The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
