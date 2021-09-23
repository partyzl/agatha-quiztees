import React from "react";
import Particles from "react-particles-js";
import { SimpleSlider } from "../../components";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import "./styles.css";

const WaitingRoom = () => {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 2,
              out_mode: "bounce",
            },
            shape: {
              type: "image",

              options: {
                image: {
                  src: "https://friconix.com/png/fi-cnsuxx-question-mark.png",
                  width: 202,
                  height: 200,
                },
              },
            },

            color: {
              value: "#FF7F50",
            },
            opacity: {
              value: 1,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 20,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
      <Header />
      <SimpleSlider />
      <Particles />
      <Footer />
    </>
  );
};

export default WaitingRoom;
