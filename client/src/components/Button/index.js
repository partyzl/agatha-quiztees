import React from 'react';
import './style.css';

const Button = ({onClick, value}) => ( 
    <button className="app-button" onClick={onClick}>
        {value}
    </button>
    );




  export default Button;
  
// the idea here is that we only need one button component and pass it props whenever we need to use it, to allow us to fill it with a different label or allow it to perform a different onClick
