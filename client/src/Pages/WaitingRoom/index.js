import React from 'react';
import Particles from 'react-particles-js';
import { Header } from '../../Layout';
import { Footer } from '../../Layout';

const WaitingRoom = () => {
    return (
        <>
          <div>
            <Particles
              params={{
                particles:{
                  number: {
                    value: 30,
                    density:{
                      enable:true,
                      value_area: 900
                    }
                  },
                  "move": {
                    "speed": 1,
                    "out_mode": "out"
                },
                  shape:{
                    "type": "image",
                    "image":
                        {
                            "src": "../../../public/questionmarksvg.svg",
                            "height": 20 
                        }
                        }
                }
                  }} />
                  </div>
        <Header />
        <Particles />
        <Footer />
        </>
    );
}

export default WaitingRoom;
