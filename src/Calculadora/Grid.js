import React from 'react';

class Grid extends React.Component
{
    constructor(props) {

        super(props);
      
    }
   

    render = () => {
       let saida = null;

       if(this.props.pai.state.tarefas.length == 0)
       {
            saida = <div>
                <table style={{textAlign: 'right'}}>
                    <tr>
                        <td>Gorjeta: 0 R$</td>
                    </tr>
                    <tr>
                        <td>Total a pagar: 0 R$</td>
                    </tr>
                    <tr>
                        <td>Total a pagar por pessoa: 0 R$</td>
                    </tr>
                </table>
            </div>
       }
       else
       {
            saida = 
            <div>
            <table style={{textAlign: 'right'}}>
                        <tr>              
                            <td>Gorjeta: {this.props.pai.state.gorjetaFinalString}</td>
                        </tr>
                        <tr>
                            <td>Total a pagar: {this.props.pai.state.contaString}</td>
                        </tr>
                        <tr>
                            <td>Total a pagar por pessoa: {this.props.pai.state.contaPorPessoaString}</td>
                        </tr>
            </table>
            </div>
       }
        
        return saida;
    }
}

export default Grid;