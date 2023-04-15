import React from 'react';

class Form extends React.Component
{
    constructor(props) {

        super(props);

        this.state = {}
    }
   
    render = () => {
        
        let saida = 
           <div>
               <table style={{marginBottom:5, marginLeft:"17px", textAlign:"left"}}>
                    <tr>
                        <td>
                            <label>Valor</label><br/>
                            <input style={{width:"100px"}} type="number"
                            value={this.props.pai.state.tarefa}
                            onChange={(e) => this.props.pai.setState({tarefa: e.target.value})} />
                        </td>

                        <td>
                            <label>Qtd de pessoas</label><br/>
                            <input style={{width:"100px"}} type="number"
                            value={this.props.pai.state.qtd}
                            onChange={(e) => this.props.pai.setState({qtd: e.target.value})} />
                        </td>
                    </tr>
               </table>

                <br/>

                <label style={{marginLeft:"20px"}}>Gorjeta</label>
               <div style={{marginBottom:50, textAlign:"left",marginLeft:"20px"}}>

                    <select value={this.props.pai.state.gorjeta}
                    onChange={(e) => this.props.pai.setState({gorjeta: e.target.value})}
                    style={{maxWidth:"100px"}}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <label style={{marginRight:30}}>%</label>
                    <button type="button" onClick={this.props.pai.adicionar} style={{marginRight:20}}>Calcular</button>
                    <button type="button" onClick={this.props.pai.zerar} >Zerar</button>
               </div>
               <label>____________________________________________</label>
           </div>
           
           
        return saida;
    }
}

export default Form;