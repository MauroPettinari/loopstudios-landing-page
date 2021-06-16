import React from "react";

import { CreationsCard } from "./CreationsCard";

import deepEarthImg from "../../../assets/images/mobile/image-deep-earth.jpg";
import nightArcadeImg from "../../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeamImg from "../../../assets/images/mobile/image-soccer-team.jpg";
import gridImg from "../../../assets/images/mobile/image-grid.jpg";
import fromAboveImg from "../../../assets/images/mobile/image-from-above.jpg";
import borealisImg from "../../../assets/images/mobile/image-pocket-borealis.jpg";
import fisheyeImg from "../../../assets/images/mobile/image-fisheye.jpg";
import curiosityImg from "../../../assets/images/mobile/image-curiosity.jpg";

const creationsData = [
  { title: "Deep earth", img: deepEarthImg, type: "double-line" },
  { title: "Night arcade", img: nightArcadeImg, type: "double-line"  },
  { title: "Soccer team vr", img: soccerTeamImg, type: "triple-line"  },
  { title: "The grid", img: gridImg, type: "double-line"  },
  { title: "From up above vr", img: fromAboveImg, type: "triple-line"  },
  { title: "Pocket borealis", img: borealisImg, type: "double-line"  },
  { title: "The curiosity", img: curiosityImg, type: "double-line"  },
  { title: "Make it fisheye", img: fisheyeImg, type: "triple-line"  },
];

export const Creations = () => {
  return (
    <section className="creations" type="creations">
      <h2 className="title">Our creations</h2>
      {creationsData.map((creation) => (
        <CreationsCard key={creation.title} {...creation} />
      ))}
      <a href="#creations" class="button">See all</a>
    </section>
  );
};
