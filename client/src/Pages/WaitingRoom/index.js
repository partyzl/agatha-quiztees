import React from 'react';
import Particles from 'react-particles-js';
import { SimpleSlider } from "../../components";

import { Header } from '../../Layout';
import { Footer } from '../../Layout';
import './styles.css'
import Questionparticle from '../../components/Questionparticle';

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
                    "image",
    
                    "options": {
                        "image": {
                            "src": "data:image/png;base64,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",
                            "width": 202,
                            "height": 200
                        }}},
                    

	        "color": {
	            "value": "#FF7F50"
	        },
            "opacity": {
                "value": 0.7,
                "anim": {
                    "enable": false,
                }},
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
