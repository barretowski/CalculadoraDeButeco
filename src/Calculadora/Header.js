
import React from 'react';

class Header extends React.Component
{
    render = () => {
        let saida = 
        <div style= {{maxWidth: "350px"}}>
            <h1 style = {{backgroundColor: "#808080", color:"black", textAlign:"center"}}>Calculadora de Buteco</h1>
        </div>


        return saida;
    }
}

export default Header;