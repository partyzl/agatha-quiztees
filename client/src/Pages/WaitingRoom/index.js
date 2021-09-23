import React from 'react';
import Particles from 'react-particles-js';
import { SimpleSlider } from "../../components";

import { Header } from '../../Layout';
import { Footer } from '../../Layout';
import './styles.css'
// import {Questionmark} from './questionmarksvg.svg'

const WaitingRoom = () => {
    return (
         <>

        <Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 20,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 2,
	            "out_mode": "bounce"
	        },
	        "shape": {
	            "type": 
	                "circle"
            },
	            // "image": [
	            //     {
	            //         "src": './questionmarksvg.svg',
	            //         "height": 200,
	            //         "width": 230
	            //     },
	                
	        //     ]
	        // },
	        "color": {
	            "value": "#fff"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 20,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
        
        
        <Header />
        <SimpleSlider />
        <Footer />
        </>
    );
}

export default WaitingRoom;
