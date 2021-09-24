import React from 'react';
import './styles.css';

const Button = ({onClick, value}) => ( 
    <button className="app-button" onClick={onClick}>
        {value}
    </button>
    );

  export default Button;

